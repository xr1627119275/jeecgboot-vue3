<template>
  <a-spin :spinning="confirmLoading">
    <a-form ref="formRef" class="antd-modal-form" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-row>
        <a-col :span="24">
          <a-form-item label="订单编号" v-bind="validateInfos.orderId">
            <a-input v-model:value="formData.orderId" placeholder="请输入订单编号" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="售后编码" v-bind="validateInfos.aftersaleCode">
            <a-input v-model:value="formData.aftersaleCode" placeholder="请输入售后编码" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="用户id" v-bind="validateInfos.userId">
            <a-input v-model:value="formData.userId" placeholder="请输入用户id" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="售后类型" v-bind="validateInfos.aftersaleType">
            <a-input v-model:value="formData.aftersaleType" placeholder="请输入售后类型" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="售后状态" v-bind="validateInfos.aftersaleStatus">
            <a-input v-model:value="formData.aftersaleStatus" placeholder="请输入售后状态" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="发货状态" v-bind="validateInfos.shippingStatus">
            <a-input v-model:value="formData.shippingStatus" placeholder="请输入发货状态" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="发货状态" v-bind="validateInfos.operationType">
            <a-input v-model:value="formData.operationType" placeholder="请输入发货状态" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="快递" v-bind="validateInfos.expressInterception">
            <a-input v-model:value="formData.expressInterception" placeholder="请输入快递" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="退款原因" v-bind="validateInfos.refundReason">
            <a-input v-model:value="formData.refundReason" placeholder="请输入退款原因" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="申请说明" v-bind="validateInfos.applicationDescription">
            <a-input v-model:value="formData.applicationDescription" placeholder="请输入申请说明" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="订单金额" v-bind="validateInfos.orderAmount">
            <a-input-number v-model:value="formData.orderAmount" placeholder="请输入订单金额" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="退款金额" v-bind="validateInfos.refundAmount">
            <a-input-number v-model:value="formData.refundAmount" placeholder="请输入退款金额" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="卖家id" v-bind="validateInfos.sellerId">
            <a-input v-model:value="formData.sellerId" placeholder="请输入卖家id" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="卖家备注" v-bind="validateInfos.sellerNote">
            <a-input v-model:value="formData.sellerNote" placeholder="请输入卖家备注" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="收件地址" v-bind="validateInfos.shippingAddress">
            <a-input v-model:value="formData.shippingAddress" placeholder="请输入收件地址" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="物流公司" v-bind="validateInfos.logisticsCompany">
            <a-input v-model:value="formData.logisticsCompany" placeholder="请输入物流公司" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="快递单号" v-bind="validateInfos.trackingNumber">
            <a-input v-model:value="formData.trackingNumber" placeholder="请输入快递单号" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="物流记录" v-bind="validateInfos.logisticsRecord">
            <a-textarea v-model:value="formData.logisticsRecord" rows="4" placeholder="请输入物流记录" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="其他记录" v-bind="validateInfos.otherRecord">
            <a-textarea v-model:value="formData.otherRecord" rows="4" placeholder="请输入其他记录" :disabled="disabled"/>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-spin>
</template>

<script lang="ts" setup>
import { ref, reactive, defineExpose, nextTick, defineProps, computed, onMounted } from 'vue';
import { defHttp } from '/@/utils/http/axios';
import { useMessage } from '/@/hooks/web/useMessage';
import { getValueType } from '/@/utils';
import { saveOrUpdate } from '../Orders.api';
import { Form } from 'ant-design-vue';

const props = defineProps({
  formDisabled: { type: Boolean, default: false },
  formData: { type: Object, default: ()=>{} },
  formBpm: { type: Boolean, default: true }
});
const formRef = ref();
const useForm = Form.useForm;
const emit = defineEmits(['register', 'ok']);
const formData = reactive<Record<string, any>>({
  id: '',
  orderId: '',
  aftersaleCode: '',
  userId: '',
  aftersaleType: '',
  aftersaleStatus: '',
  shippingStatus: '',
  operationType: '',
  expressInterception: '',
  refundReason: '',
  applicationDescription: '',
  orderAmount: undefined,
  refundAmount: undefined,
  sellerId: '',
  sellerNote: '',
  shippingAddress: '',
  logisticsCompany: '',
  trackingNumber: '',
  logisticsRecord: '',
  otherRecord: '',
});
const { createMessage } = useMessage();
const labelCol = ref<any>({ xs: { span: 24 }, sm: { span: 5 } });
const wrapperCol = ref<any>({ xs: { span: 24 }, sm: { span: 16 } });
const confirmLoading = ref<boolean>(false);
//表单验证
const validatorRules = {
  orderId: [{ required: true, message: '请输入订单编号!'},],
};
const { resetFields, validate, validateInfos } = useForm(formData, validatorRules, { immediate: true });

// 表单禁用
const disabled = computed(()=>{
  if(props.formBpm === true){
    if(props.formData.disabled === false){
      return false;
    }else{
      return true;
    }
  }
  return props.formDisabled;
});


/**
 * 新增
 */
function add() {
  edit({});
}

/**
 * 编辑
 */
function edit(record) {
  nextTick(() => {
    resetFields();
    //赋值
    Object.assign(formData, record);
  });
}

/**
 * 提交数据
 */
async function submitForm() {
  // 触发表单验证
  await validate();
  confirmLoading.value = true;
  const isUpdate = ref<boolean>(false);
  //时间格式化
  let model = formData;
  if (model.id) {
    isUpdate.value = true;
  }
  //循环数据
  for (let data in model) {
    //如果该数据是数组并且是字符串类型
    if (model[data] instanceof Array) {
      let valueType = getValueType(formRef.value.getProps, data);
      //如果是字符串类型的需要变成以逗号分割的字符串
      if (valueType === 'string') {
        model[data] = model[data].join(',');
      }
    }
  }
  await saveOrUpdate(model, isUpdate.value)
    .then((res) => {
      if (res.success) {
        createMessage.success(res.message);
        emit('ok');
      } else {
        createMessage.warning(res.message);
      }
    })
    .finally(() => {
      confirmLoading.value = false;
    });
}


defineExpose({
  add,
  edit,
  submitForm,
});
</script>

<style lang="less" scoped>
.antd-modal-form {
  min-height: 500px !important;
  overflow-y: auto;
  padding: 24px 24px 24px 24px;
}
</style>
