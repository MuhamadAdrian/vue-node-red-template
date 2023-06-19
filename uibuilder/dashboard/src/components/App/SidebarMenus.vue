<script setup lang="ts">
import { Element3Icon, Profile2UserIcon } from '@morphemeicons/vue/iconsax/linear'
import { ChevronDownIcon } from '@morphemeicons/vue/untitled'

const { isAsideOpen } = defineProps<{
  isAsideOpen: boolean
}>()

const emit = defineEmits<{
  'menuClick': [menu: MenuItem]
}>()

interface MenuItem {
  title: string
  icon?: Component
  to: string
  children?: MenuItem[]
}

const menus = shallowRef<MenuItem[]>([
  {
    title: 'Dashboard',
    icon: Element3Icon,
    to: '/',
  },
  {
    title: 'User Management',
    icon: Profile2UserIcon,
    to: '/user',
    children: [
      {
        title: 'Role Management',
        to: '/roles',
      },
    ],
  },
])

const route = useRoute()

function isMenuActiveOnChildren(menu: MenuItem) {
  return menu.children?.some(child => route.path.startsWith(child.to))
}

function onMenuClick(menu: MenuItem) {
  emit('menuClick', menu)
}
</script>

<template>
  <VList hover class="sidebar-menus">
    <template
      v-for="menu in menus"
      :key="menu.title"
    >
      <VListCollapse
        v-if="menu.children"
        :model-value="isMenuActiveOnChildren(menu)"
      >
        <template #activator="{ isOpen, toggle }">
          <a
            exact-active-class="active"
            :class="[{
              active: isMenuActiveOnChildren(menu),
            }]"
            class="flex transition-all"
            @click="toggle"
          >
            <div class="w-6 h-6 transition-all" :class="{ 'ml-[6px]': !isAsideOpen }">
              <component :is="menu.icon" class="w-6 h-6" />
            </div>
            <AppNavText :is-aside-open="isAsideOpen">
              {{ menu.title }}
            </AppNavText>
            <ChevronDownIcon class="w-6 h-6 ml-auto transition-transform" :class="[isOpen ? 'rotate-180' : '']" />
          </a>
          <!-- <VListItem
            exact-active-class="active"
            :class="{
              active: isMenuActiveOnChildren(menu),
            }"
            @click="toggle"
          >
            <template v-if="menu.icon" #prepend />
            <template #append />
          </VListItem> -->
        </template>
        <VList class="-mx-1">
          <RouterLink
            v-for="child in menu.children"
            :key="child.title"
            :to="child.to"
            class="flex transition-all"
            exact-active-class="active"
            @click="onMenuClick(child)"
          >
            <div class="w-6 h-6 transition-all" :class="{ 'ml-[6px]': !isAsideOpen }">
              <component :is="menu.icon" class="w-6 h-6" />
            </div>
            <AppNavText :is-aside-open="isAsideOpen">
              {{ child.title }}
            </AppNavText>
          </RouterLink>
          <!-- <VListItem
            v-for="child in menu.children"
            :key="child.title"
            :to="child.to"
            exact-active-class="active"
            @click="onMenuClick(child)"
          >
            <template v-if="child.icon" #prepend>
              <component :is="child.icon" class="w-6 h-6" />
            </template>
            <AppNavText :is-aside-open="isAsideOpen">
              {{ child.title }}
            </AppNavText>
          </VListItem> -->
        </VList>
      </VListCollapse>
      <RouterLink
        v-else
        :to="menu.to"
        class="flex transition-all"
        exact-active-class="active"
        @click="onMenuClick(menu)"
      >
        <div class="w-6 h-6 transition-all" :class="{ 'ml-[6px]': !isAsideOpen }">
          <component :is="menu.icon" class="w-6 h-6" />
        </div>
        <AppNavText :is-aside-open="isAsideOpen">
          {{ menu.title }}
        </AppNavText>
      </RouterLink>
      <!-- <VListItem
        v-else
        :to="menu.to"
        exact-active-class="active"
        @click="onMenuClick(menu)"
      >
        <template v-if="menu.icon" #prepend>
          <component :is="menu.icon" class="w-6 h-6" />
        </template>
        <AppNavText :is-aside-open="isAsideOpen">
          {{ menu.title }}
        </AppNavText>
      </VListItem> -->
    </template>
  </VList>
</template>
