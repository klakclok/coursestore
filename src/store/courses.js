import axios from "axios";

export default {
  state: {
    courses: [],
    host: 'https://8bit.comrades.dev'
  },
  getters: {
    getCourses(state) {
      return state.courses
    },
    getHost(state) {
      return state.host
    }
  },
  mutations: {
    updateCourses(state, courses) {
      state.courses = courses
    },
    // getCourse (state, course) {
    //   return state.courses.find(item => item.id === course.id)
    // },
    createCourseMutation(state, course) {
      state.courses.push(course)
    },
    deleteCourseMutation(state, id) {
      state.courses = state.courses.filter(item => item.id !== id)
    },
    editCourseMutation(state, course) {
      let findCourse = state.courses.find(item => item.id === course.id)

      if (findCourse) {
        findCourse = course
      }
      return findCourse
    }
  },
  actions: {
    createCourse({commit}, course) {
      axios({
        url: 'https://8bit.comrades.dev/api/course/insert',
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'multipart/form-data'
        },
        data: {
          title: course.title,
          category: course.category,
          price: course.price,
          description: course.description,
          image: course.img
        }
      }).then((response) => {
        commit('createCourseMutation', response.data.course)
      }).catch((err) => {
        console.log(err)
      })
    },
    getCourses({commit}) {
      axios({
        url: 'https://8bit.comrades.dev/api/courses',
        method: "GET",
      }).then((response) => {
        commit('updateCourses', response.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    deleteCourse({commit}, id) {
      axios({
        url: `https://8bit.comrades.dev/api/course/delete/${id}`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(() => {
        commit('deleteCourseMutation', id)
      }).catch(err => {
        console.log(err)
      })
    },
    editCourse({commit}, course) {
      console.log(course.img)
      axios({
        url: `https://8bit.comrades.dev/api/course/update`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data'
        },
        data: {
          id: course.id,
          title: course.title,
          category: course.category,
          price: course.price,
          description: course.description,
          image: course.img
        }
      }).then((resp) => {
        commit('editCourseMutation', resp.data.course)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
