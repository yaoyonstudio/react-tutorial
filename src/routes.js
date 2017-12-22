import Home from './components/Home/Home'
import Notfound from './components/Notfound'

import Basic from './components/Basic/Basic'
import State from './components/Basic/State'
import Props from './components/Basic/Props'
import Event from './components/Basic/Event'
import Lifecycle from './components/Basic/Lifecycle'
import Communication from './components/Basic/Communication'
import Requesting from './components/Basic/Requesting'
import Conditional from './components/Basic/Conditional'
import Lists from './components/Basic/Lists'
import Forms from './components/Basic/Forms'
import CreateElement from './components/Basic/CreateElement'
import Refs from './components/Basic/Refs'
import Composition from './components/Basic/Composition'

import Practice from './components/Practice/Practice'
import PostList from './components/Practice/InfiniteScroll/PostList'
import Posts from './components/Practice/InfiniteScroll/Posts'
import Post from './components/Practice/InfiniteScroll/Post'
import SwiperPage from './components/Practice/Swiper/SwiperPage'
import FilterPage from './components/Practice/Filter/FilterPage'
import Test from './components/Test'

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/basic', component: Basic },
  { path: '/basic/state', component: State },
  { path: '/basic/props', component: Props },
  { path: '/basic/event', component: Event },
  { path: '/basic/lifecycle', component: Lifecycle },
  { path: '/basic/communication', component: Communication },
  { path: '/basic/requesting', component: Requesting },
  { path: '/basic/conditional', component: Conditional },
  { path: '/basic/lists', component: Lists },
  { path: '/basic/forms', component: Forms },
  { path: '/basic/createElement', component: CreateElement },
  { path: '/basic/refs', component: Refs },
  { path: '/basic/composition', component: Composition },
  { path: '/practice', component: Practice },
  { path: '/practice/posts', component: Posts },
  { path: '/practice/postlist', component: PostList },
  { path: '/practice/posts/:id', component: Post },
  { path: '/practice/swiperPage', component: SwiperPage },
  { path: '/practice/filterPage', component: FilterPage },
  { path: '/test', component: Test },
  { path: '*', component: Notfound }
]

export default routes
