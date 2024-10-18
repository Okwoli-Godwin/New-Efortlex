import Accordion from "../../components/Ui/Accordion"

const Question = () => {
  return (
    <div className="w-[100%] mt-[60px] flex justify-center items-center">
        <div className="w-[87%] flex flex-col items-center">
            <h1 className="text-[23px] font-[600]">
                Frequently asked questions
            </h1>
            <p className="text-[17px] font-[500] mt-[5px]">
                Have any question, we’ve got you covered, Explore common questions
            </p>

            <div className="w-[100%] flex mt-[45px]">
                <Accordion />
            </div>
        </div>
    </div>
  )
}

export default Question