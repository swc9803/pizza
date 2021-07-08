<template>
  <div class="center">
    <div class="form">
      <h1 class="mt-2">공지사항 작성</h1>
      <hr>
      <form>
        <label>제목</label>
        <div class="row">
          <div class="col-6">
            <input type="text" class="form-control" style="width: 300px" v-model="title" required>
          </div>
          <div class="col-12 mt-3">
            <div class="form-group">
              <label>내용</label>
              <textarea class="form-control" cols="30" rows="10" v-model="content" placeholder="내용을 입력하세요" required></textarea>
            </div>
          </div>
        </div>
      </form>
      <div v-if="user != ''">
        <button class="btn btn-danger m-3" @click="moveToBoard">취소</button>
        <button class="btn btn-primary m-3" @click="saveform">저장</button>
      </div>
      <div v-else class="card mt-3">
        글을 작성하시려면 로그인을 해주세요!
      </div>
    </div>
  </div>
</template>

<script>
import { db, auth } from '../../fdb'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default {
  setup () {
    const router = useRouter()
    const currentDate = new Date()
    const createdAt = currentDate.getFullYear() + '.' + ('0' + (1 + currentDate.getMonth())).slice(-2) + '.' + ('0' + currentDate.getDate()).slice(-2) + '  ' + ('0' + currentDate.getHours()).slice(-2) + ':' + ('0' + currentDate.getMinutes()).slice(-2) + ':' + ('0' + currentDate.getSeconds()).slice(-2)
    const views = 0
    const title = ref('')
    const content = ref('')

    const saveform = async () => {
      if (title.value === '' || content.value === '') {
        alert('내용을 전부 입력해주세요!')
      } else {
        await db.collection('forms').add(
          {
            title: title.value, content: content.value, createdAt, views
          }
        )
        alert('작성 완료!')
        router.push({
          name: 'Board'
        })
      }
    }
    return {
      saveform
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
.center {
  height: 610px;
  width: 60%;
  margin: 0 auto;
}
.card {
  width: 50%;
  font-size: 25px;
  text-align: center;
  background-color: gray;
  margin: auto;
}
.btn {
  float: right;
}
</style>
