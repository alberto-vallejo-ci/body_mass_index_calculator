const Home = ({}) => (
  <div className='home'>
    <p className='home--title'>Body Mass Index Calculator</p>
    <p className='home--description'>
      The Body Mass Index is an attempt to quantify the amount of tissue mass
      (muscle, fat, and bone) in an individual, and then categorize that person as underweight,
      normal weight, overweight, or obese based on that value.
    </p>

    <CalculatorForm />
  </div>
)

Home.defaultProps = {}
Home.propTypes = {}
