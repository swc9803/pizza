<template>
  <div class="modal-wrapper" style="color: cyan;">
    <div class="modal-dialog">
      <div class="modal-content" style="background: rgb(50, 50, 50)">
        <div class="modal-header m-2">
          <h6 class="modal-title"><i class="fas fa-sign-out-alt"></i> 관리자만 글을 작성할 수 있습니다.</h6>
        </div>
        <div class="form form-group modal-body">
          <label>Email address</label>
          <input type="email" v-model="email" class="form-control">
        </div>
        <div class="form form-group modal-body">
          <label>Password</label>
          <input type="password" v-model="password" class="form-control">
        </div>
        <div class="modal-footer m-2">
          <button type="button" class="btn btn-primary" @click="onLogin">로그인</button>
          <button type="button" class="btn btn-secondary" @click="onClose">취소</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup (props, { emit }) {
    const onLogin = () => {
      emit('login')
    }
    const onClose = () => {
      emit('close')
    }
    return {
      onLogin,
      onClose
    }
  }
}
</script>

<style scoped>
.modal-wrapper {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.form {
  width: 70%;
}
</style>
