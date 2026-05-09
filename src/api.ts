export async function loadPosts() {
  const response = await fetch("https://json-placeholder.mock.beeceptor.com/posts")
  if (!response.ok) {
    throw new Error(Ошибка загрузки постов: ${response.status} ${response.statusText})
  }
  const data = await response.json()
  return data
}
