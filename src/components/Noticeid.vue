<template>
  <div class="margin">
    <h2 class="notice">공지사항</h2>
    <hr>
    <div v-if="loading" class="m-5">
      <div class="spinner-border text-primary" role="status"></div> Loading
    </div>
    <div v-else>
      <form style="color: rgb(190, 240, 192)">
        <div class="card title">
          {{ title }}
        </div>
        <div class="card">
          작성일 : {{ createdAt }}
        </div>
        <div class="card content">
          {{ content }}
        </div>

        <div v-if="user !== ''">
          <button @click.prevent="openModal" class="btn btn-danger mt-3" style="float: right">삭제</button>
        </div>
        <div class="goNotice mt-3" @click="moveToNotice">
          <i class="fas fa-list"></i> 목록
        </div>
      </form>
      <div class="btn">
        <NoticeDeleteModal
          v-if="showModal"
          @close="closeModal"
          @delete="Deleteform"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { db, auth } from '../../fdb'
import NoticeDeleteModal from '@/components/NoticeDeleteModal'
import { ref, onMounted } from 'vue'

export default {
  data () {
    return {
      user: ''
    }
  },
  setup () {
    const loading = ref(true)
    const route = useRoute()
    const router = useRouter()
    const showModal = ref(false)
    const name = ref('')
    const title = ref('')
    const content = ref('')
    const createdAt = ref('')

    const openModal = () => {
      showModal.value = true
    }
    const closeModal = () => {
      showModal.value = false
    }
    const moveToNotice = () => {
      router.push({
        name: 'Notice'
      })
    }
    const Deleteform = async () => {
      await db.collection('forms').doc(route.params.id).delete().then(() => {
        alert('정상적으로 삭제되었습니다.')
        showModal.value = false
        router.push({
          name: 'Notice'
        })
      })
    }

    onMounted(async () => {
      const noticeinfo = db.collection('forms').doc(route.params.id)
      const doc = await noticeinfo.get()
      title.value = doc.data().title
      content.value = doc.data().content
      createdAt.value = doc.data().createdAt
      loading.value = false
    })

    return {
      loading,
      showModal,
      openModal,
      closeModal,
      Deleteform,
      moveToNotice,
      name,
      title,
      content,
      createdAt
    }
  },
  components: {
    NoticeDeleteModal
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
.notice {
  color: rgba(223,190,106);
  font-size: 30px;
  text-align: center;
}
.margin {
  width: 70%;
  margin: auto;
}
hr {
  height: 4px;
  background: linear-gradient(270deg, rgba(34,34,34,0), rgba(146,111,52,0.8), rgb(255, 217, 120), rgba(146,111,52,0.8), rgba(34,34,34,0));
}
.card {
  background: rgb(41, 41, 41);
  border: 1px ;
  white-space: pre-line;
  border: 1px solid rgb(190, 240, 192);
  padding: 7px;
}
.title {
  font-size: 17.4px;
  font-weight: bold;
}
.content {
  height: 400px;
}
.goNotice {
  color: rgba(223,190,106,0.7);
  border-radius: 50px;
  padding: 18px 80px 20px;
  transition: all 0.7s ease-out;
  background: linear-gradient(270deg, rgba(223,190,106,0.8), rgba(146,111,52,0.8), rgba(34,34,34,0), rgba(34,34,34,0));
  background-position: 1% 50%;
  background-size: 300% 300%;
  border: 1px solid rgba(223,190,106,0.3);
  margin: auto;
  display: block;
  text-align: center;
  width: 283px;
  cursor: pointer;
}
.goNotice:hover {
  color: #fff;
  border: 1px solid rgba(223,190,106,0);
  color: white;
  background-position: 99% 50%;
}
.m-5 {
  height: 533px;
}
</style>
