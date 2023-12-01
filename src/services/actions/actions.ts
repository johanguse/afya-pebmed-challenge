'use server'
type Message = {
  message: string | null
}
export async function send(message: Message) {
  console.log(message)
}
