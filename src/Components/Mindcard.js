import { MIND_IMG } from "../../utils/Constant";

const MindCard = (props) =>{
    const{mindInfo} = props;
        const { imageId } = mindInfo?.info;
    return (
        <div className="mincard-container">
           <img src= {MIND_IMG+imageId} />
        
        </div>
    )
}

export default MindCard;