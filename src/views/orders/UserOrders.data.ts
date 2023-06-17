import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '用户id',
    align: "center",
    dataIndex: 'userId'
  },
  {
    title: '总订单金额',
    align: "center",
    sorter: true,
    dataIndex: 'totalOrderAmount'
  },
  {
    title: '总退货金额',
    align: "center",
    sorter: true,
    dataIndex: 'totalRefundAmount'
  },
  {
    title: '备注说明',
    align: "center",
    dataIndex: 'description'
  },
];

//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: "用户id",
    field: 'userId',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "总订单金额",
    field: "totalOrderAmount",
    component: 'JRangeNumber',
    colProps: {span: 6},
  },
  {
    label: "总退货金额",
    field: "totalRefundAmount",
    component: 'JRangeNumber',
    colProps: {span: 6},
  },
  {
    label: "备注说明",
    field: 'description',
    component: 'Input',
    colProps: {span: 6},
  },
];

//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '用户id',
    field: 'userId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
              { required: true, message: '请输入用户id!'},
             ];
    },
  },
  {
    label: '总订单金额',
    field: 'totalOrderAmount',
    component: 'InputNumber',
  },
  {
    label: '总退货金额',
    field: 'totalRefundAmount',
    component: 'InputNumber',
  },
  {
    label: '备注说明',
    field: 'description',
    component: 'Input',
  },
	// TODO 主键隐藏字段，目前写死为ID
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false,
  },
];
