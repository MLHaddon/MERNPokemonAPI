const RenderPokemon = ({name, idx}) => {
  return (
    <div className="card border-primary w-25">
      <div className="card-body">
        <h4 className="card-title">{idx + 1}: {name}</h4>
      </div>
    </div>
  )
}
export default RenderPokemon;