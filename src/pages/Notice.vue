<template>
  <div class="margin">
    <h2 class="notice">공지사항</h2>
    <div class="but">
      <div v-if="user == ''">
        <button class="btn btn-secondary" @click="openModal" style="position: absolute;">
          글쓰기
        </button>
      </div>
      <div v-else>
        <button class="btn btn-secondary" @click="moveToCreate" style="position: absolute;">
          글쓰기
        </button>
      </div>
    </div>
    <hr>
    <form class="form">
      <div v-if="loading" class="m-5">
        <div class="spinner-border text-primary" role="status"></div> Loading
      </div>
      <table v-else class="table mt-5">
        <thead>
          <tr style="text-align: center">
            <th style="width: 4%">No.</th>
            <th>제목</th>
            <th style="width: 13%">작성일</th>
          </tr>
        </thead>
        <tbody v-for="(form, i) in forms" :key="form.id">
          <td style="text-align: center;">{{ forms.length - i }}</td>
          <td><span @click="moveToPage(form.id)" style="cursor: pointer">{{ form.title }}</span></td>
          <td style="text-align: center">{{ form.createdAt }}</td>
        </tbody>
      </table>
    </form>
    <div v-if="showModal">
      <div class="modal-wrapper">
        <div class="modal-dialog">
          <div class="modal-content" style="background: rgb(50, 50, 50); color: cyan;">
            <div class="modal-header m-2">
              <h6 class="modal-title"><i class="fas fa-sign-out-alt"></i> 관리자만 글을 작성할 수 있습니다.</h6>
            </div>
            <div class="modal-body">
              <label>Email</label>
              <input type="email" v-model="email" class="form-control">
            </div>
            <div class="modal-body">
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
import { db, auth } from '../../fdb'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

export default {
  setup () {
    const router = useRouter()
    const loading = ref(true)
    const forms = ref([])
    const showModal = ref(false)
    const email = ref('')
    const password = ref('')

    const closeModal = () => {
      showModal.value = false
    }
    const openModal = () => {
      showModal.value = true
    }
    const Login = async () => {
      try {
        await auth.signInWithEmailAndPassword(email.value, password.value)
        alert('관리자 로그인 완료')
        router.push({ name: 'NoticeCreate' })
      } catch (err) {
        alert('에러 : ' + err.message)
      }
    }
    const moveToCreate = () => {
      router.push({
        name: 'NoticeCreate'
      })
    }
    onMounted(async () => {
      const sn = await db.collection('forms').orderBy('realcreatedAt', 'desc').get()
      sn.forEach(doc => {
        const { title, createdAt, realcreatedAt } = doc.data()
        forms.value.push({
          id: doc.id, title, createdAt, realcreatedAt
        })
      })
      loading.value = false
    })
    const moveToPage = (Noticeid) => {
      router.push({
        name: 'Noticeid',
        params: {
          id: Noticeid
        }
      })
    }
    return {
      showModal,
      openModal,
      closeModal,
      email,
      password,
      Login,
      moveToCreate,
      moveToPage,
      forms,
      loading
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
table, th, td {
  color: rgb(0, 0, 0);
  background: rgb(230, 230, 230);
  border: 1px solid rgb(0, 0, 0);
  padding: 3px;
}
.notice {
  color: rgba(223,190,106);
  font-size: 30px;
  text-align: center;
}
.but {
  float: right;
}
hr {
  height: 4px;
  background: linear-gradient(270deg, rgba(34,34,34,0), rgba(146,111,52,0.8), rgb(255, 217, 120), rgba(146,111,52,0.8), rgba(34,34,34,0));
}
.margin {
  width: 70%;
  margin: auto;
  height: 618px;
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
  width: 75%;
  margin: auto;
}
</style>
