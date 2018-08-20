<template>
  <div class="app-wrapper" >
    <side-bar :isCollapse="close" class="sidebar-container"></side-bar>
    <div class="main-container g-pr" :style="MainContainerClose">
      <nav-bar @SideBarClose="SideBarCloseFun"></nav-bar>
      <app-main internal="65"></app-main>
    </div>
  </div>
</template>

<script>
import { NavBar, SideBar, AppMain } from './components';

export default {
  name: 'layout',
	data() {
		return {
			close:false
		}
	},
  components: {
    NavBar,
    SideBar,
    AppMain,
  },
	computed: {
		MainContainerClose() {
			return this.close?{
				"margin-left":"65px"
			}:""
		}
	},
	methods: {
		SideBarCloseFun() {
			this.close=!this.close
		}
	}
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

.main-container {
  min-height: 100vh;
  transition: margin-left 0.28s;
  margin-left: 230px;
  background-color: #f0f2f5;
}
</style>
