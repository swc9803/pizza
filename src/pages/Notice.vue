<template>
  <div class="margin">
    신메뉴
    휴일
    <div v-if="user == ''">
      <button class="btn btn-primary" @click="openModal">
        글쓰기
      </button>
    </div>
    <div v-else>
      <button class="btn btn-primary" @click="moveToCreate">
        글쓰기
      </button>
    </div>
    <div v-if="showModal">
      <div class="modal-wrapper" style="color: cyan;">
        <div class="modal-dialog">
          <div class="modal-content" style="background: rgb(50, 50, 50)">
            <div class="modal-header m-2">
              <h6 class="modal-title"><i class="fas fa-sign-out-alt"></i> 관리자만 글을 작성할 수 있습니다.</h6>
            </div>
            <div class="form form-group modal-body">
              <label>Email</label>
              <input type="email" v-model="email" class="form-control">
            </div>
            <div class="form form-group modal-body">
              <label>Password</label>
              <input type="password" v-model="password" class="form-control">
            </div>
            <div class="modal-footer m-2">
              <button type="button" class="btn btn-primary" @click="Login">로그인</button>
              <button type="button" class="btn btn-secondary" @click="closeModal">취소</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { auth } from '../../fdb'

export default {
  setup () {
    const router = useRouter()
    const showModal = ref(false)
    const closeModal = () => {
      showModal.value = false
    }
    const email = ref('')
    const password = ref('')

    const openModal = () => {
      showModal.value = true
    }
    const Login = async () => {
      try {
        await auth.signInWithEmailAndPassword(email.value, password.value)
        alert('관리자 로그인 완료')
        router.push({ name: 'Create' })
      } catch (err) {
        alert('에러 : ' + err.message)
      }
    }
    const moveToCreate = () => {
      router.push({
        name: 'Create'
      })
    }
    const LogOut = async () => {
      await auth.signOut()
      closeModal()
      alert('로그아웃 되었습니다.')
      router.push({ name: 'Home' })
    }
    return {
      showModal,
      openModal,
      closeModal,
      email,
      password,
      Login,
      moveToCreate,
      LogOut
    }
  },
  data () {
    return {
      user: ''
    }
  },
  mounted () {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user
      } else {
        this.user = ''
      }
    })
  }
}
</script>

<style scoped>
.margin {
  width: 80%;
  margin: auto;
}
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
