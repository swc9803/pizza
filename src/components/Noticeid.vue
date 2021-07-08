<template>
  <div v-if="loading" class="form mt-5">
    <div class="spinner-border text-primary" role="status"></div> Loading
  </div>
  <div v-else>
    <form class="form" style="color: black">
      <div class="title card mt-4">
        {{ title }}
      </div>
      <div class="card">
        <div class="ml-2 mb-1">
          작성일 : {{ createdAt }}
        </div>
        <span>
          조회수 : {{ views }}
        </span>
      </div>
      <div class="card mt-4" style="height: 400px">
        <div class="ml-2" style="white-space: pre-line">
          {{ content }}
        </div>
      </div>
      <div v-if="uid !== ''">
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
    const views = ref('')

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

    onMounted(async () => {
      const noticeinfo = db.collection('forms').doc(route.params.id)
      const doc = await noticeinfo.get()
      title.value = doc.data().title
      content.value = doc.data().content
      createdAt.value = doc.data().createdAt
      views.value = doc.data().views
      await db.collection('forms').doc(route.params.id).update(
        {
          views: (views.value + 1)
        }
      )
      loading.value = false
    })

    const Deleteform = async () => {
      await db.collection('forms').doc(route.params.id).delete().then(() => {
        alert('정상적으로 삭제되었습니다.')
        showModal.value = false
        router.push({
          name: 'Notice'
        })
      })
    }
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
      createdAt,
      views
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

<style>
.form {
  width: 70%;
  height: 570px;
  margin: auto;
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
</style>
