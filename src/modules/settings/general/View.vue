<template>
  <sa-section class="general">
    <el-form
        ref="formGeneralSettings"
        v-loading="ui.loadingGetDetails"
        :model="settingDetails"
        :rules="rules"
        hide-required-asterisk
      >
      <div class="general__row">
        <el-form-item :label="$t('page.settings.updateSetting')">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-form-item>
                <el-button
                  type="success"
                  @click="preHandleBeforeSubmit"
                >
                  {{ $t('page.settings.refresh') }}
                </el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
      </div>

      <div class="general__row">
        <el-form-item :label="$t('page.settings.changeNewAfter')" prop="changeNewAfter">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="4" :md="8" :lg="4" :xl="4">
              <el-form-item>
                <el-input
                  v-model="settingDetails.changeNewAfter">
                  <p slot="suffix">{{ $t('page.settings.days') }}</p>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
      </div>

      <div class="general__row">
        <el-form-item :label="$t('page.settings.blockBookingFrom')" prop="blockBookingFrom">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="4" :md="8" :lg="4" :xl="4">
              <el-form-item>
                <el-input
                  v-model="settingDetails.blockBookingFrom">
                  <p slot="suffix">{{ $t('page.settings.days') }}</p>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
      </div>

      <div class="general__row">
        <el-form-item :label="$t('page.settings.lastVersion')" required>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="4">
              <el-form-item prop="lastIosVersion">
                <el-input
                  v-model="settingDetails.lastIosVersion">
                  <p slot="suffix">IOS App</p>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="4">
              <el-form-item prop="lastAndroidVersion">
                <el-input
                  v-model="settingDetails.lastAndroidVersion">
                  <p slot="suffix">Android App</p>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
      </div>

      <div class="general__row">
        <el-form-item :label="$t('page.settings.partnerLastVersion')" required>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4">
              <el-form-item prop="lastIosPartnerVersion">
                <el-input
                  v-model="settingDetails.lastIosPartnerVersion">
                  <p slot="suffix">IOS App</p>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4">
              <el-form-item prop="lastAndroidPartnerVersion">
                <el-input
                  v-model="settingDetails.lastAndroidPartnerVersion">
                  <p slot="suffix">Android App</p>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
      </div>

      <div class="general__row">
        <el-form-item :label="$t('page.settings.cineJoyLastVersion')" required>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4">
              <el-form-item prop="lastIosCineJoyVersion">
                <el-input
                  v-model="settingDetails.lastIosCineJoyVersion">
                  <p slot="suffix">IOS App</p>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4">
              <el-form-item prop="lastAndroidCineJoyVersion">
                <el-input
                  v-model="settingDetails.lastAndroidCineJoyVersion">
                  <p slot="suffix">Android App</p>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
      </div>

      <div class="general__row">
        <el-form-item :label="$t('page.settings.refreshCacheData')">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-form-item>
                <el-button
                  type="success"
                  @click="getSettings"
                >
                  {{ $t('page.settings.refresh') }}
                </el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
      </div>
    </el-form>
  </sa-section>
</template>
<script>
import SaSection from '@/components/globals/SaSection.vue'
import { getSettings, updateSetting } from './api'
export default {
  name: 'GeneralSettings',
  components: {
    SaSection
  },
  data: (vm) => {
    return {
      ui: {
        loadingGetDetails: false,
        loadingUpdateSetting: false
      },
      filter: {
        status: 1
      },
      settingDetails: {},
      rules: {
        changeNewAfter: [
          { required: true, message: vm.$t('validation.required'), trigger: 'blur' }
        ],
        blockBookingFrom: [
          { required: true, message: vm.$t('validation.required'), trigger: 'blur' }
        ],
        lastIosVersion: [
          { required: true, message: vm.$t('validation.required'), trigger: 'blur' }
        ],
        lastAndroidVersion: [
          { required: true, message: vm.$t('validation.required'), trigger: 'blur' }
        ],
        lastIosPartnerVersion: [
          { required: true, message: vm.$t('validation.required'), trigger: 'blur' }
        ],
        lastAndroidPartnerVersion: [
          { required: true, message: vm.$t('validation.required'), trigger: 'blur' }
        ],
        lastIosCineJoyVersion: [
          { required: true, message: vm.$t('validation.required'), trigger: 'blur' }
        ],
        lastAndroidCineJoyVersion: [
          { required: true, message: vm.$t('validation.required'), trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.getSettings()
  },
  methods: {
    async getSettings () {
      this.ui.loadingGetDetails = true
      try {
        const { data } = await getSettings(this.filter)
        this.settingDetails = data.data
      } catch (error) {
        return false
      } finally {
        this.ui.loadingGetDetails = false
      }
    },
    preHandleBeforeSubmit () {
      this.$refs.settingDetails.validate((valid) => {
        if (!valid) {
          return false
        }
        this.submit()
      })
    },
    async submit () {
      this.ui.loadingUpdateSetting = true
      try {
        const { data } = await updateSetting(this.settingDetails)
        if (data.code === 1) {
          const message = this.$t('message.updateSuccess')
          this.$message({
            type: 'success',
            message: message
          })
        }
      } catch (error) {
        return false
      } finally {
        this.ui.loadingUpdateSetting = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.general {
  &__row {
    :deep(.el-form-item) {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      flex-wrap: wrap;
      @media (max-width: 768px) {
        display: block;
      }
    }
    :deep(.el-form-item__label) {
      text-align: left;
      flex: 1;
      @media (max-width: 768px) {
        display: block;
      }
    }
    :deep(.el-form-item__content) {
      flex: 4;
      @media (max-width: 1440px) {
        flex: 2;
      }
    }
    :deep(.el-form-item__error) {
      position: unset;
    }
  }
}
.el-col {
  padding: unset;
}
.el-form-item {
  margin-bottom: 1vh;
}
</style>
