export default function Card({ title, desc }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: 15,
      margin: 10,
      borderRadius: 10
    }}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}