// Code EyesOnMe Component Here
function EyeComponent(){
    return <button onFocus={() => console.log("Good!")} onBlur={() => console.log("Hey! Eyes on me!")}>Eyes on me</button>
}

function EyesOnMe() {
  return (
    <div>
      <EyeComponent />
    </div>
  )
}

export default EyesOnMe
