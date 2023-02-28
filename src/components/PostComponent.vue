<template>
  <div class="container">
      <h1>Latest Posts</h1>
     <div class="create-post">
            <div class="formGroup">
                <label for="post_name">Nom:  </label>
                <input type="text" id="post_name" v-model="nxPost.nom"/>
            </div>
            <br>
            <div class="formGroup">
                <label for="post_description">Description:  </label>
                <input type="text" id="post_description" v-model="nxPost.description"/>
            </div>
            <br>
            <div class="formGroup">
                <button @click= "ajoutPost()" class="button">Ajouter</button> 
            </div>
      </div>
      <hr>
      <p class="error" v-if="error">{{ error }}</p>
      <div class="posts-container">
          <div class="post" v-for="(post, index) in posts" :key="post._id" v-on:dblclick="deletePost(post._id)">
          
            <h2>{{ post.nom }}</h2>
            <p class="text">{{ post.description }}</p>
          </div>
      </div>
  </div>
</template>

<script>
 import {postService } from '@/_services'
export default {
  name: 'PostComponent',
    data() {
      return {
          posts:[],
          error:'',
          nxPost : {
                  nom: '',
                 description: '',
                  },
      } 
    },
  methods: {
    async ajoutPost(){
        await postService.createPost(this.nxPost)
                    .then(console.log(this.nxPost))
                    .catch(err => console.log(err))
      },
      async deletePost(id){
        await postService.deletePost(id)
                    .then(console.log(this.Post))
                    .catch(err => console.log(err))
      }
  },

  mounted(){
        postService.getAllPosts()
             .then(res => { console.log(res.data)
                    this.posts = res.data
                })
              .catch(err => console.log(err))
        },

  updated(){
        postService.getAllPosts()
             .then(res => { console.log(res.data)
                    this.posts = res.data
                })
              .catch(err => console.log(err))
        },
      
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}
p.error{
  border:1px solid red;
  background-color: lightpink;
  padding: 10px;
  margin-bottom: 15px;
}
div.post{
  position: relative;
  border: 1px solid green;
  background-color: lightgreen;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}
div.created-at {
  position: absolute;
  top:0;
  left:0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
  color: darkorange;
}
p.text{
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 0;
}
.formGroup{
  margin-left: auto;
  margin-right: auto;

}
</style>
