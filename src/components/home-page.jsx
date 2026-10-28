// Cultivate Play — homepage composition.
function Site(){
  const [book,setBook]=React.useState(false);
  const open=()=>setBook(true);
  return (<React.Fragment>
    <window.CPNav onBook={open}/>
    <main>
      <window.CPHero onBook={open}/>
      <window.CPServices/>
      <window.CPFloortime/>
      <window.CPTraining/>
      <window.CPApproach/>
      <window.CPTeam/>
      <window.CPTestimonials/>
      <window.CPReviews/>
      <window.CPFaq/>
    </main>
    <window.CPFooter onBook={open}/>
    <window.CPBooking open={book} onClose={()=>setBook(false)}/>
  </React.Fragment>);
}
ReactDOM.createRoot(document.getElementById('root')).render(<Site/>);
