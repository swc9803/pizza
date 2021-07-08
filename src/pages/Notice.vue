<template>
  <div class="margin">
    신메뉴
    휴일
    글쓰기 누르면  ifuser=글쓰기로 else 모달창,로그인후 글쓰기로
    모달 안되면 페이지로
    <button class="btn btn-primary" @click="moveToCreate">
      글쓰기
    </button>
    <button class="btn btn-dark btn-block" @click="openModal">
      로그인
    </button>
    <LoginModal
      v-if="showModal"
      @login="Login"
      @close="closeModal"
    />
  </div>
</template>

<script>
import LoginModal from '@/components/LoginModal'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { auth } from '../../fdb'

export default {
  setup () {
    const router = useRouter()
    const showModal = ref(false)
    const openModal = () => {
      showModal.value = true
    }
    const moveToCreate = () => {
      router.push({
        name: 'Create'
      })
    }
    const closeModal = () => {
      showModal.value = false
    }
    const email = ref('')
    const password = ref('')
    const Login = async () => {
      try {
        await auth.signInWithEmailAndPassword(email.value, password.value)
        alert('관리자 로그인 완료')
        router.push({ name: 'Create' })
      } catch (err) {
        alert('에러 : ' + err.message)
      }
    }
    return {
      showModal,
      openModal,
      closeModal,
      moveToCreate,
      email,
      password,
      Login
    }
  },
  components: {
    LoginModal
  }
}
</script>

<style scoped>
.margin {
  width: 80%;
  margin: auto;
}
</style>
