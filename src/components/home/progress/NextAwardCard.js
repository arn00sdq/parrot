import Reward from '../../reward/Reward';
import treasure from '../../../assets/img/treasure.png';
import feather_icon from '../../../assets/img/feather-icon.jpg';

function NextAwardCard(props){
    return (
        <div className="progress-card">
            <div className="progress-title-card">{props.titleCard}</div>
            <div className="container-bar-xp">
                <div className="large-text-xp">5/10 xp</div>
                <div className="large-xp-bar">                          
                    <div className="progress-xp-bar" style={{backgroundColor:'#F9A014',height:'5px',width:'70%',borderRadius: '10px' }}></div>
                </div>
            </div> 
            <div className="daily-award">
            <Reward imgReward='chest-reward' classReward={feather_icon}/>
            <Reward imgReward='chest-reward' classReward={feather_icon}/>
            <Reward imgReward='chest-reward' classReward={feather_icon}/>
            <Reward imgReward='chest-reward' classReward={treasure}/>
            </div>
        </div>
    );
}

export default NextAwardCard