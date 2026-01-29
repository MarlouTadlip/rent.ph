import type { Pagination } from '~/models/manager'

const BASE_URL = 'https://rent.ph/api'

export const useManagerStore = defineStore('manager', () => {
  const manager = ref<any>()
  const managers = ref<any[]>([])
  const pros = computed(() => managers.value.filter((m) => m.pro))
  const pagination = ref<Pagination>()
  const loading = ref(false)

  const getManager = async (id: string | number) => {
    loading.value = true
    try {
      const res = await fetch(`${BASE_URL}/###/${id}`)
      if (!res.ok) throw new Error(`Failed to fetch manager: ${res.statusText}`)
      const json = await res.json()
      manager.value = json.data
    } catch (err) {
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const getManagers = async (
    page: string | number = 1,
    numberPerPage: string | number = 10,
    searchQuery: string | null = null,
  ) => {
    loading.value = true
    try {
      const query = `page=${page}&per_page=${numberPerPage}${searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ''}`
      const res = await fetch(`${BASE_URL}/###?${query}`)
      if (!res.ok) throw new Error(`Failed to fetch managers: ${res.statusText}`)
      const json = await res.json()
      managers.value = json.data
      pagination.value = json.pagination
    } catch (err) {
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return {
    manager,
    managers,
    pros,
    pagination,
    getManager,
    getManagers,
    loading,
  }
})
