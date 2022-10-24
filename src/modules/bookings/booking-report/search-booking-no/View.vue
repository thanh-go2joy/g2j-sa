<template>
  <sa-section class="search-booking">
    <template slot="header">
      <el-row>
        <el-col :xs="24" :sm="8" :md="6" :lg="6" :xl="3">
          <el-select
            class="w-100"
            v-model="filter.type"
            @change="handleSearchBookingDetails"
          >
            <el-option
              v-for="item in ui.types"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          </el-col>
        <el-col :xs="24" :sm="8" :md="6" :lg="6" :xl="4">
          <el-input
            class="w-100"
            v-if="filter.type === 0"
            v-model="filter.bookingNo"
            :placeholder="$t('page.bookingReport.booking_no_placeholder')"
            clearable
            prefix-icon="el-icon-search"
          />
        </el-col>
      </el-row>
    </template>
    <table-booking
      :data="bookingList"
      :isLoading="ui.loadingBookingDetails"
      :columns="ui.columns"
      @onCancelBooking="onCancelBooking"
      @onRefundBooking="onRefundBooking"
      @onTransferBooking="onTransferBooking"
      @onNoshowBooking="onNoshowBooking"
      @onCompleteBooking="onCompleteBooking"
    />
    <template slot="footer">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 30, 40, 50]"
        :page-size="pagination.perPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total">
      </el-pagination>
    </template>
    <!-- -------------------------------------- -->
    <div>
      <popup-cancel ref="cancelModal" @onSuccess="fetchBookingDetails" />
      <popup-noshow ref="noshowModal" @onSuccess="fetchBookingDetails" />
      <popup-refund ref="refundModal" @onSuccess="fetchBookingDetails" />
      <popup-complete ref="completeModal" @onSuccess="fetchBookingDetails" />
      <popup-confirm-noshow ref="confirmNoshowModal" @onSuccess="fetchBookingDetails" />
    </div>
    <!-- -------------------------------------- -->
  </sa-section>
</template>
<script>
import { fetchBookingDetail } from './api'
import SaSection from '@/components/globals/SaSection.vue'
import { debounce } from '@/utils/helpers'
import { VIA_OBJECT, repStatus } from '@/utils/const'
import PopupCancel from '../popup/cancel'
import PopupNoshow from '../popup/no-show'
import PopupRefund from '../popup/refund'
import PopupComplete from '../popup/complete'
import PopupConfirmNoshow from '../popup/confirm-no-show'
import TableBooking from '../common/table-booking.vue'

const timeDebounce = 500
export default {
  name: 'SearchByBookingNo',
  components: {
    SaSection,
    PopupCancel,
    PopupNoshow,
    PopupRefund,
    PopupComplete,
    PopupConfirmNoshow,
    TableBooking
  },
  data: (vm) => {
    return {
      bookingList: [],
      pagination: {},
      filter: {
        limit: 10,
        page: 1,
        type: 0,
        bookingNo: ''
      },
      ui: {
        types: [
          { label: vm.$t('page.bookingReport.booking_no_placeholder'), value: 0 },
          { label: vm.$t('page.bookingReport.canceled_booking'), value: 1 }
        ],
        loadingBookingDetails: false,
        columns: [
          {
            label: 'bookingId',
            width: 160,
            show: true
          },
          {
            label: 'userInfo',
            width: 140,
            show: true
          },
          {
            label: 'hotelName',
            width: 180,
            show: true
          },
          {
            label: 'roomType',
            width: 160,
            show: true
          },
          {
            label: 'bookingStatus',
            width: 200,
            show: true
          },
          {
            label: 'paymentStatus',
            width: 180,
            show: true
          },
          {
            label: 'bookingType',
            width: 160,
            show: true
          },
          {
            label: 'stayAtHotelTime',
            width: 160,
            show: true
          },
          {
            label: 'coupon',
            width: 170,
            show: true
          },
          {
            label: 'roomRate',
            width: 160,
            show: true
          },
          {
            label: 'totalPayment',
            width: 200,
            show: true
          },
          {
            label: 'go2joyDiscount',
            width: 160,
            show: true
          },
          {
            label: 'hotelDiscount',
            width: 160,
            show: true
          },
          {
            label: 'userPay',
            width: 180,
            show: true
          },
          {
            label: 'device',
            width: 120,
            show: true
          },
          {
            label: 'source',
            width: 120,
            show: true
          },
          {
            label: 'action',
            width: 130,
            show: true
          }
        ]
      }
    }
  },
  created () {
    this.filter.type = Number(this.$route.query.type) || 0
    this.filter.bookingNo = this.$route.query.bookingNo ?? ''
  },
  watch: {
    'filter.bookingNo' () {
      this.handleSearchBookingDetails()
    }
  },
  methods: {
    handleSearchBookingDetails: debounce(function () {
      this.fetchBookingDetails()
    }, timeDebounce),
    async fetchBookingDetails () {
      this.ui.loadingBookingDetails = true
      try {
        const { data } = await fetchBookingDetail(this.filter)
        if (data?.code === repStatus.sussess) {
          this.bookingList = data.data?.bookingList
          this.pagination = data.data?.meta
        }
      } catch (error) {
        return false
      } finally {
        this.ui.loadingBookingDetails = false
      }
    },
    handleSizeChange (value) {
      this.filter.limit = value
      this.fetchBookingDetails()
    },
    handleCurrentChange (value) {
      this.filter.page = value
      this.fetchBookingDetails()
    },
    changeType () {
      this.$router.push({ name: 'searchByBookingNo', query: { type: this.filter.type } })
    },
    onDirectTransfer (data) {
      this.$router.push({ name: 'bookingReportTransfer', params: { sn: data.sn }, query: { type: this.filter.type, bookingNo: this.filter.bookingNo } })
    },
    onCancelBooking (data) {
      this.$refs.cancelModal.open(data)
    },
    onRefundBooking (data) {
      this.$refs.refundModal.open(data)
    },
    onTransferBooking (data) {
      this.$router.push({ name: 'bookingReportTransfer', params: { sn: data.sn } })
    },
    onNoshowBooking (data) {
      if (this.isAwaitingGo2JoyProcessing(data) && data.viaObject === VIA_OBJECT.h && data.reasonForNoShow) {
        this.$refs.confirmNoshowModal.open(data)
      } else {
        this.$refs.noshowModal.open(data)
      }
    },
    onCompleteBooking (data) {
      this.$refs.completeModal.open(data)
    }
  }
}
</script>
<style lang="scss" scoped>
.el-col {
  padding: 6px 10px;
}
.operations-btn {
  width: 150px
}
</style>
