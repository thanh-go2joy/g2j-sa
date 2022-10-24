<template>
  <sa-section class="cash-flow-mgt">
    <template slot="header">
      <div class="cash-flow-mgt__filter">
        <el-row>
          <el-col :xs="24" :sm="8" :md="6" :lg="5" :xl="3" class="custom-height">
            <sa-select-check
              v-model="filter.hotelStatus"
              :model-check-all="checkBox.checkAllStatus"
              :options="ui.statusOptions"
              @changeCheckAll="handleCheckAllStatus"
              @input="handleCheckedStatus"
              translate
            />
          </el-col>
          <el-col :xs="24" :sm="8" :md="6" :lg="5" :xl="3" class="custom-height">
            <sa-select-check
              :isCheckAll="true"
              v-model="filter.provinceSn"
              :model-check-all="checkBox.checkAllProvinces"
              label="sn"
              keyValue="name"
              :options="provinces"
              @changeCheckAll="handleCheckAllProvinces"
              @input="handleCheckedProvince"
              :loadingButton="ui.provincesLoading"
            />
          </el-col>
          <el-col :xs="24" :sm="8" :md="6" :lg="5" :xl="3">
            <el-select
              v-model="filter.deviceType"
              @change="listCashFlow"
            >
              <el-option
                v-for="(item, index) in ui.deviceTypeOptions"
                :key="index"
                :label="item.key"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :xs="24" :sm="8" :md="6" :lg="5" :xl="3">
            <el-select
              v-model="source"
              @change="listCashFlow"
            >
              <el-option
                v-for="(item, index) in ui.originHotel"
                :key="index"
                :label="item.key"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :xs="24" :sm="8" :md="6" :lg="5" :xl="3">
            <el-select
              :loading="ui.isLoadingHotel"
              v-model="ui.hotel"
              value-key="sn"
              element-loading-spinner="el-icon-loading"
              remote
              filterable
              prefix-icon="el-icon-search"
              clearable
              :placeholder="$t('page.hotelDisplay.hotelName')"
              :remote-method="searchSuggestionsHotels"
              @change="listCashFlow"
            >
              <el-option
                v-for="(item, index) in hotels"
                :key="index"
                :label="item.name"
                :value="{sn: item.sn,status: item.hotelStatus}"
                style="font-size: 13px; color: #4a5d6e;"
              >
                <div class="cash-flow-mgt__filter--text-line cash-flow-mgt__filter--text-distance">
                  <p>{{ item.name }}</p>
                  <p class="cash-flow-mgt__filter--text-size text-grey">{{ item.address }}</p>
                </div>
              </el-option>
            </el-select>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="5">
            <el-date-picker
              class="w-100"
              v-model="dateRange"
              type="daterange"
              popper-class="custom-date-range"
              range-separator="-"
              :start-placeholder="$t('page.firstBooking.startDate')"
              :end-placeholder="$t('page.firstBooking.endDate')"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              :clearable="false"
              @change="listCashFlow"
            />
          </el-col>
          <el-col :xs="24" :sm="8" :md="6" :lg="5" :xl="3">
            <el-select
              v-model="filter.type"
              @change="listCashFlow"
            >
              <el-option
                v-for="(item, index) in ui.type"
                :key="index"
                :value="item.value"
                :label="$t(item.label)"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :xs="24" :sm="8" :md="6" :lg="5" :xl="3">
            <el-button v-if="hasPermission('sabooking', 'pExport')" type="success" icon="el-icon-download" plain  @click="onExport">
              {{ $t('button.export') }}
            </el-button>
          </el-col>
          <el-col :xs="24" :sm="8" :md="6" :lg="5" :xl="3">
              <router-link v-if="hasPermission('sahoteldebt', 'pView')" :to="{name: 'sendMail',
                  params: {
                    startDate: filter.startDate,
                    endDate: filter.endDate
                  }
                }"
                class="el-button el-button--default is-plain">
                  <i class="el-icon-s-promotion"/>
                  {{ $t('button.sendMail') }}
              </router-link>
          </el-col>
        </el-row>
      </div>
    </template>
    <el-table
      :data="data"
      v-loading="ui.isTableLoading"
    >
      <el-table-column :min-width="180">
        <template slot="header">
            <span>{{ $t('page.cashFlowReport.totalCFBooking') }}</span>
            <el-tooltip class="ml-4" effect="light" :content="$t('page.cashFlowReport.describeTotalCFBooking')" placement="bottom">
              <i class="el-icon-warning-outline"></i>
            </el-tooltip>
        </template>
        <template slot-scope="scope">
          <p>{{ scope.row.totalBooking }}</p>
        </template>
      </el-table-column>
      <el-table-column :min-width="180">
        <template slot="header">
            <span>{{ $t('page.cashFlowReport.totalCFAgoda') }}</span>
            <el-tooltip class="ml-4" effect="light" :content="$t('page.cashFlowReport.describeTotalCFAgoda')" placement="bottom">
              <i class="el-icon-warning-outline"></i>
            </el-tooltip>
        </template>
        <template slot-scope="scope">
          <p>{{ scope.row.totalAgodaBooking }}</p>
        </template>
      </el-table-column>
      <el-table-column :min-width="180">
        <template slot="header">
            <span>{{ $t('page.cashFlowReport.totalCFGo2Joy') }}</span>
            <el-tooltip class="ml-4" effect="light" :content="$t('page.cashFlowReport.describeTotalCFGo2Joy')" placement="bottom">
              <i class="el-icon-warning-outline"></i>
            </el-tooltip>
        </template>
        <template slot-scope="scope">
          <p>{{ scope.row.totalGo2JoyBooking }}</p>
        </template>
      </el-table-column>
      <el-table-column :min-width="180"
        :label="$t('page.cashFlowReport.hotel_name')"
        fixed
      >
        <template slot-scope="scope">
          <router-link
            type="primary"
            :to="{
              name: 'cashFlowReportDetail',
              params: {
                sn: scope.row.hotelSn,
                deviceType: filter.deviceType,
                startDate: filter.startDate,
                endDate: filter.endDate
              }
            }"
          >
            {{ scope.row.hotelName }}
          </router-link>
          <br />
          <p>
            {{ scope.row.hotelCode }}
          </p>
        </template>
      </el-table-column>
      <el-table-column :min-width="180">
        <template slot="header">
          <p>{{ this.$t('page.cashFlowReport.product_amount') }}</p>
          <p>{{ this.$t('page.cashFlowReport.extra_fee') }}</p>
        </template>
        <template slot-scope="scope">
          <p>{{ formatMoney(scope.row.productValue) }}</p>
          <p>{{ formatMoney(scope.row.extraFee) }}</p>
        </template>
      </el-table-column>
      <el-table-column :min-width="160">
        <template slot="header">
          <p>
            <span class="text-danger">(1)</span>
            {{ this.$t('page.cashFlowReport.total_amount') }}
          </p>
        </template>
        <template slot-scope="scope">
          <p>{{ formatMoney(scope.row.totalAmount) }}</p>
        </template>
      </el-table-column>
      <el-table-column :min-width="160" >
        <template slot="header">
          <p>
            <span class="text-danger">(2)</span>
            {{ this.$t('page.cashFlowReport.g2j_discount') }}
          </p>
          <p>
            <span class="text-danger">(3)</span>
            {{ this.$t('page.cashFlowReport.hotel_discount') }}
          </p>
        </template>
        <template slot-scope="scope">
          <p>{{ formatMoney(scope.row.totalGo2joyDiscount) }}</p>
          <p>{{ formatMoney(scope.row.totalHotelDiscount) }}</p>
        </template>
      </el-table-column>
      <el-table-column :min-width="180">
        <template slot="header">
          <p>
            <span class="text-danger">(4)</span>
            {{ this.$t('page.cashFlowReport.user_pay') }}
          </p>
          <p class="text-danger">(1) - (2) - (3)</p>
        </template>
        <template slot-scope="scope">
          <p>{{ formatMoney(scope.row.amountFromUser) }}</p>
        </template>
      </el-table-column>
      <el-table-column :min-width="160">
        <template slot="header">
          <p>
            <span class="text-danger">(5)</span>
            {{ this.$t('page.cashFlowReport.paid_in_advance') }}
          </p>
        </template>
        <template slot-scope="scope">
          <p>{{ formatMoney(scope.row.prepayAmount) }}</p>
        </template>
      </el-table-column>
      <el-table-column :min-width="160">
        <template slot="header">
          <p>
            <span class="text-danger">(6)</span>
            {{ this.$t('page.cashFlowReport.commission') }}
          </p>
        </template>
        <template slot-scope="scope">
          <p>{{ formatMoney(scope.row.totalCommissionAmount) }}</p>
        </template>
      </el-table-column>
      <el-table-column :min-width="160">
        <template slot="header">
          <p>
            <span class="text-danger">(7)</span>
            {{ this.$t('page.cashFlowReport.balance') }}
          </p>
          <p>{{ this.$t('page.cashFlowReport.receivable') }}</p>
          <p>{{ this.$t('page.cashFlowReport.payable') }}</p>
          <p class="text-danger">(6) - (2) - (5)</p>
        </template>
        <template slot-scope="scope">
          <p>{{ formatMoney(scope.row.theBalance) }}</p>
        </template>
      </el-table-column>
      <el-table-column :min-width="160">
        <template slot="header">
          <p>{{ this.$t('page.cashFlowReport.current_debt') }},</p>
          <p>{{ this.$t('page.cashFlowReport.other_debt') }}</p>
        </template>
        <template slot-scope="scope" v-if="!scope.row.total">
          <p>{{ formatMoney(scope.row.currentDebt) }}</p>
          <p>{{ formatMoney(scope.row.ortherDebt) }}</p>
        </template>
      </el-table-column>
      <el-table-column :min-width="160"
        :label="$t('page.cashFlowReport.period_debt')"
      >
        <template slot-scope="scope">
          <p>{{ formatMoney(scope.row.periodDebt) }}</p>
        </template>
      </el-table-column>
      <el-table-column :min-width="160">
        <template slot="header">
          <p>{{ this.$t('page.cashFlowReport.expected_pay') }},</p>
          <p>{{ this.$t('page.cashFlowReport.pay_amount') }}</p>
        </template>
        <template slot-scope="scope">
          <p>{{ formatMoney(scope.row.expectedPay) }}</p>
          <p>{{ formatMoney(scope.row.payAmount) }}</p>
        </template>
      </el-table-column>
      <el-table-column :min-width="120"
        fixed="right"
        align="center"
        :label="$t('action')"
      >
        <template slot-scope="scope">
          <el-popover
              placement="left"
              trigger="click"
            >
            <el-button
              v-show="isShowOperations(scope.row)"
              slot="reference" type="primary" plain size="small">
                {{ $t('action')}}
                <i class="el-icon-caret-bottom"></i>
              </el-button>
              <el-row :gutter="20" class="operations-btn">
                <el-col v-show="scope.row.origin != 2 && hasPermission('sahoteldebt', 'pView')" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-button
                    class="w-100"
                    type="primary"
                    plain
                    size="small"
                    @click="onCancelBooking(scope.row)"
                  >
                    {{ $t('page.cashFlowReport.hotelDebt') }}
                  </el-button>
                </el-col>
                <el-col v-show="hasPermission('sabooking', 'pExport')" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-button
                    class="w-100"
                    type="info"
                    plain
                    size="small"
                    @click="onExportById(scope.row.hotelSn)"
                  >
                    {{ $t('button.export') }}
                  </el-button>
                </el-col>
              </el-row>
            </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <template slot="footer">
      <el-pagination
        @size-change="onSizeChange"
        @current-change="onCurrentChange"
        :page-sizes="[10, 20, 30, 40, 50]"
        :page-size="pagination.perPage"
        :current-page="filter.page"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total"
      />
    </template>
  </sa-section>
</template>
<script>
import saSection from '@/components/globals/SaSection.vue'
import { listCashFlow, onExportCashFlow, onExportCashFlowByID } from './api'
import { fetchSuggestionsHotels } from '@/api/hotels'
import { fetchProvinces } from '@/api/province'
import { debounce } from '@/utils/helpers'
import SaSelectCheck from '@/components/globals/SaSelectCheck.vue'
import { BOOKING_ORIGIN, repStatus } from '@/utils/const'

const timeDebounce = 500
const today = new Date()
const allHotelStatus = [3, 4, 5, 6]
export default {
  name: 'CashFlowReport',
  components: {
    saSection,
    SaSelectCheck
  },
  data () {
    return {
      filter: {
        limit: 10,
        page: 1,
        provinceSn: [],
        startDate: this.formatDate(
          new Date(today.getFullYear(), today.getMonth(), 1),
          false
        ),
        endDate: this.formatDate(
          new Date(today.getFullYear(), today.getMonth() + 1, 0),
          false
        ),
        type: 1,
        deviceType: 0,
        hotelStatus: [3, 4, 5, 6],
        bookingStatus: 0
      },
      pagination: {},
      source: {},
      ui: {
        isTableLoading: false,
        isLoadingHotel: false,
        provinceOptions: [],
        hotel: {},
        type: [
          { label: 'Thời gian nhận phòng', value: 1 },
          { label: 'Thời gian hoàn thành', value: 2 }
        ],
        statusOptions: [
          { key: 'page.bookingReport.contracted', value: 3 },
          { key: 'page.bookingReport.trial', value: 4 },
          { key: 'page.bookingReport.terminated', value: 5 },
          { key: 'page.bookingReport.suspended', value: 6 }
        ],
        deviceTypeOptions: [
          { key: this.$t('page.bookingReport.allDevice'), value: 0 },
          { key: this.$t('page.bookingReport.app'), value: 1 },
          { key: this.$t('page.bookingReport.web'), value: 2 }
        ],
        originHotel: [
          {
            key: this.$t('page.bookingReport.allSource'),
            value: {
              property: 'originHotel',
              value: 0
            }
          },
          {
            key: 'Go2joy',
            value: {
              property: 'originHotel',
              value: 1
            }
          },
          {
            key: 'Agoda',
            value: {
              property: 'originHotel',
              value: 2
            }
          },
          {
            key: 'Momo',
            value: {
              property: 'source',
              value: 28
            }
          }
        ]
      },
      checkBox: {
        checkAllStatus: true,
        checkAllProvinces: true
      },
      hotels: [],
      data: [],
      provinces: []
    }
  },
  computed: {
    dateRange: {
      get () {
        return [this.filter.startDate, this.filter.endDate]
      },
      set (val) {
        this.filter.startDate = val[0]
        this.filter.endDate = val[1]
      }
    }
  },
  created () {
    this.listProvinces()
    this.listCashFlow()
  },
  methods: {
    isShowOperations (row) {
      return !row.total && (this.hasPermission('sabooking', 'pExport') || (row.origin !== BOOKING_ORIGIN.agoda && this.hasPermission('sahoteldebt', 'pView')))
    },
    async listCashFlow () {
      this.ui.isTableLoading = true
      try {
        if (this.ui.hotel?.status === -1) {
          this.filter.hotelGroupSn = this.ui.hotel?.sn
        } else {
          this.filter.hotelSn = this.ui.hotel?.sn
        }
        let params = {}
        params = {
          ...this.filter,
          ...this.source.value === 28
            ? {
              source: this.source.value
            }
            : {
              originHotel: this.source.value
            }
        }
        params.hotelStatus = JSON.stringify(params.hotelStatus)
        params.provinceSn = JSON.stringify(params.provinceSn)
        const { data } = await listCashFlow(params)
        if (data?.code === repStatus.sussess) {
          this.data = data.data.cashFlowList
          const statistics = data.data.statistics
          statistics.total = true
          this.data.unshift(statistics)
          this.pagination = data.data.meta
        }
      } catch (error) {
        return false
      } finally {
        this.ui.isTableLoading = false
      }
    },
    searchSuggestionsHotels: debounce(function (keyword) {
      this.listSuggestionsHotels({
        limit: 10,
        keyword: keyword
      })
    }, timeDebounce),
    async listSuggestionsHotels (params) {
      this.ui.isLoadingHotel = true
      try {
        const { data } = await fetchSuggestionsHotels(params)
        this.hotels = data.data.hotels
      } catch (error) {
        return false
      } finally {
        this.ui.isLoadingHotel = false
      }
    },
    async listProvinces () {
      this.ui.provincesLoading = true
      try {
        const { data } = await fetchProvinces({ limit: 100, status: 1 })
        this.provinces = data.data.provinces
        this.ui.provinceOptions = await data.data.provinces.reduce(
          function async (preValue, curValue) {
            return preValue.concat(curValue.sn)
          },
          []
        )
        this.filter.provinceSn = [...this.ui.provinceOptions]
      } catch (error) {
        return false
      } finally {
        this.ui.provincesLoading = false
      }
    },
    async onExport () {
      try {
        if (this.ui.hotel?.status === -1) {
          this.filter.hotelGroupSn = this.ui.hotel?.sn
        } else {
          this.filter.hotelSn = this.ui.hotel?.sn
        }
        const formData = {
          ...this.filter
        }
        formData.hotelStatus = JSON.stringify(formData.hotelStatus)
        formData.provinceSn = JSON.stringify(formData.provinceSn)
        await onExportCashFlow(formData)
        this.$message({
          type: 'success',
          message: this.$t('message.exportSuccess')
        })
      } catch (error) {
        return false
      }
    },
    async onExportById (id) {
      try {
        const params = {
          startDate: this.filter.startDate,
          endDate: this.filter.endDate,
          type: this.filter.type,
          deviceType: this.filter.deviceType,
          hotelSn: id
        }
        await onExportCashFlowByID(params)
        this.$message({
          type: 'success',
          message: this.$t('message.exportSuccess')
        })
      } catch (error) {
        return false
      }
    },
    handleCheckAllStatus (val) {
      this.checkBox.checkAllStatus = val
      this.filter.hotelStatus = val ? allHotelStatus : []
      this.listCashFlow()
    },
    handleCheckedStatus: debounce(function (value) {
      this.checkBox.checkAllStatus = value.length === allHotelStatus.length
      this.listCashFlow()
    }, 1000),
    handleCheckAllProvinces (val) {
      this.checkBox.checkAllProvinces = val
      this.filter.provinceSn = val ? this.ui.provinceOptions : []
      this.listCashFlow()
    },
    handleCheckedProvince: debounce(function (value) {
      this.checkBox.checkAllProvinces = value.length === this.ui.provinceOptions.length
      this.listCashFlow()
    }, 1000),
    onSizeChange (size) {
      this.filter.limit = size
      if (
        Math.ceil(this.pagination.total / size) < this.pagination.currentPage
      ) {
        this.pagination.currentPage = Math.ceil(this.pagination.total / size)
      } // when curent page is larger than total page
      this.listCashFlow()
    },
    onCurrentChange (currentPage) {
      this.filter.page = currentPage
      this.listCashFlow()
    }
  }
}
</script>

<style lang="scss" scoped>
.cash-flow-mgt {
  &__filter {
    &--text-line {
      line-height: 24px;
    }
    &--text-distance {
      padding: 4px 0;
    }
    &--text-size {
      font-size: 13px
    }
  }
  :deep(.el-button), :deep(.el-select) {
    width: 100%;
  }
}
.el-popover {
  .el-row {
    margin: 4px 0 !important;
  }
  .el-col {
    padding: 2px 10px;;
    button {
      margin: 2px 0;
    }
  }
}
.el-col {
  padding: 6px 10px;
}
.w-100 {
  width: 100% !important;
}
.el-select-dropdown__item {
  height: auto;
}
.operations-btn {
  width: 150px
}
.custom-height {
  height: 52px;
  @media (min-width: 640px) {
    height: 0
  }
}
</style>
