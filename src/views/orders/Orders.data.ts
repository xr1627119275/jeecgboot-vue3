import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '订单编号',
    align:"center",
    dataIndex: 'orderId'
  },
  {
    title: '售后编码',
    align:"center",
    dataIndex: 'aftersaleCode'
  },
  {
    title: '用户id',
    align:"center",
    dataIndex: 'userId'
  },
  {
    title: '售后类型',
    align:"center",
    dataIndex: 'aftersaleType'
  },
  {
    title: '售后状态',
    align:"center",
    dataIndex: 'aftersaleStatus'
  },
  {
    title: '发货状态',
    align:"center",
    dataIndex: 'shippingStatus'
  },
  {
    title: '操作类型',
    align:"center",
    dataIndex: 'operationType'
  },
  {
    title: '快递',
    align:"center",
    dataIndex: 'expressInterception'
  },
  {
    title: '退款原因',
    align:"center",
    dataIndex: 'refundReason'
  },
  {
    title: '申请说明',
    align:"center",
    dataIndex: 'applicationDescription'
  },
  {
    title: '订单金额',
    align:"center",
    sorter: true,
    dataIndex: 'orderAmount'
  },
  {
    title: '退款金额',
    align:"center",
    sorter: true,
    dataIndex: 'refundAmount'
  },
  {
    title: '卖家id',
    align:"center",
    dataIndex: 'sellerId'
  },
  {
    title: '卖家备注',
    align:"center",
    dataIndex: 'sellerNote'
  },
  {
    title: '收件地址',
    align:"center",
    dataIndex: 'shippingAddress'
  },
  {
    title: '物流公司',
    align:"center",
    dataIndex: 'logisticsCompany'
  },
  {
    title: '快递单号',
    align:"center",
    dataIndex: 'trackingNumber'
  },
  {
    title: '物流记录',
    align:"center",
    dataIndex: 'logisticsRecord'
  },
  {
    title: '其他记录',
    align:"center",
    dataIndex: 'otherRecord'
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: "订单编号",
    field: 'orderId',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "售后编码",
    field: 'aftersaleCode',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "用户id",
    field: 'userId',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "售后类型",
    field: 'aftersaleType',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "售后状态",
    field: 'aftersaleStatus',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "发货状态",
    field: 'shippingStatus',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "操作类型",
    field: 'operationType',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "快递",
    field: 'expressInterception',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "退款原因",
    field: 'refundReason',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "卖家id",
    field: 'sellerId',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "卖家备注",
    field: 'sellerNote',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "收件地址",
    field: 'shippingAddress',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "物流公司",
    field: 'logisticsCompany',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "快递单号",
    field: 'trackingNumber',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "物流记录",
    field: 'logisticsRecord',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "其他记录",
    field: 'otherRecord',
    component: 'Input',
    colProps: {span: 6},
  },
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '订单编号',
    field: 'orderId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入订单编号!'},
      ];
    },
  },
  {
    label: '售后编码',
    field: 'aftersaleCode',
    component: 'Input',
  },
  {
    label: '用户id',
    field: 'userId',
    component: 'Input',
  },
  {
    label: '售后类型',
    field: 'aftersaleType',
    component: 'Input',
  },
  {
    label: '售后状态',
    field: 'aftersaleStatus',
    component: 'Input',
  },
  {
    label: '发货状态',
    field: 'shippingStatus',
    component: 'Input',
  },
  {
    label: '操作类型',
    field: 'operationType',
    component: 'Input',
  },
  {
    label: '快递',
    field: 'expressInterception',
    component: 'Input',
  },
  {
    label: '退款原因',
    field: 'refundReason',
    component: 'Input',
  },
  {
    label: '申请说明',
    field: 'applicationDescription',
    component: 'Input',
  },
  {
    label: '订单金额',
    field: 'orderAmount',
    component: 'InputNumber',
  },
  {
    label: '退款金额',
    field: 'refundAmount',
    component: 'InputNumber',
  },
  {
    label: '卖家id',
    field: 'sellerId',
    component: 'Input',
  },
  {
    label: '卖家备注',
    field: 'sellerNote',
    component: 'Input',
  },
  {
    label: '收件地址',
    field: 'shippingAddress',
    component: 'Input',
  },
  {
    label: '物流公司',
    field: 'logisticsCompany',
    component: 'Input',
  },
  {
    label: '快递单号',
    field: 'trackingNumber',
    component: 'Input',
  },
  {
    label: '物流记录',
    field: 'logisticsRecord',
    component: 'InputTextArea',
  },
  {
    label: '其他记录',
    field: 'otherRecord',
    component: 'InputTextArea',
  },
  // TODO 主键隐藏字段，目前写死为ID
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false
  },
];



/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
