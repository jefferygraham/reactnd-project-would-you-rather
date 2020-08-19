export function formatQuestion(question, author, authedUser) {
  const { id, timestamp } = question;
  const { name, avatarURL } = author;
  return {
    name,
    id,
    timestamp,
    avatar: avatarURL,
  };
}
