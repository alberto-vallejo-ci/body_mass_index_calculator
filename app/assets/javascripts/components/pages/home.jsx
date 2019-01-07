const Home = ({user}) => (
  <div className='home'>
    <p className='home--title'>Body Mass Index Calculator</p>
    <p className='home--description'>
      The Body Mass Index is an attempt to quantify the amount of tissue mass
      (muscle, fat, and bone) in an individual, and then categorize that person as underweight,
      normal weight, overweight, or obese based on that value.
    </p>
    {
      user
      ? <CalculatorForm />
      : <LoginOptions />
    }
  </div>
)

Home.defaultProps = {
  user: false,
}

Home.propTypes = {
  // user: React.PropTypes.bool,
}
