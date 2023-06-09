<template>
  <a-modal
    :title="title"
    :width="width"
    :visible="visible"
    :okButtonProps="{ class: { 'jee-hidden': disableSubmit } }"
    @cancel="handleCancel"
    cancelText="关闭"
  >
    <BasicTable @register="registerTable">

    </BasicTable>
  </a-modal>
</template>

<script lang="ts" setup>
  import { ref, nextTick, defineExpose, reactive } from 'vue';
  import {useListPage} from "/@/hooks/system/useListPage";
  import {BasicTable, useTable, TableAction} from '/@/components/Table';
  const title = ref<string>('');
  const width = ref<number>(800);
  const visible = ref<boolean>(false);
  const disableSubmit = ref<boolean>(false);
  const registerForm = ref();
  const emit = defineEmits(['register', 'success']);
  const registerModal = ref();
  import {columns} from '../Orders.data';
  import {list} from '../Orders.api';
  const queryParams = reactive({ userId: '' });
  //注册table数据
  const {prefixCls, tableContext } = useListPage({
    tableProps: {
      title: '',
      api: list,
      columns,
      canResize: false,
      useSearchForm: false,
      beforeFetch: (params) => {
        return Object.assign(params, queryParams);
      },
    },

  });
  const [registerTable, {
    reload,
    getDataSource
  }, { selectedRowKeys}] = tableContext;
  const labelCol = reactive({
    xs: {span: 24},
    sm: {span: 7},
  });
  const wrapperCol = reactive({
    xs: {span: 24},
    sm: {span: 16},
  });
  /**
   * 新增
   */
  function add() {
    title.value = '新增';
    visible.value = true;
    nextTick(() => {
      registerForm.value.add();
    });
  }

  /**
   * 编辑
   * @param record
   */
  function edit(record) {
    queryParams.userId = record.userId
    reload()
    title.value = disableSubmit.value ? '详情' : '编辑';
    visible.value = true;
  }


  /**
   * 取消按钮回调事件
   */
  function handleCancel() {
    visible.value = false;
  }

  defineExpose({
    add,
    edit,
    disableSubmit,
  });
</script>

<style>
  /**隐藏样式-modal确定按钮 */
  .jee-hidden {
    display: none !important;
  }
</style>
