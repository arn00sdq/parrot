import ExerciceContainer from '../../exerciceItem/ExerciceContainer';
import HeaderLevel from './HeaderLevel';

import { sign_where, home_ex,pres_perfect} from '../../../assets/img/index';

function SectionCard(props){
    return (
        <div className ="section-level-card card">
            <HeaderLevel titleCard={props.titleCard} />    
            <div className="exercice-card">
                <ExerciceContainer className="exercice-container" imgExercice={pres_perfect} time="10min" titleEx={props.titleEx}
                state="Terminer" content="Dans cette exercice nous verrons 
                                          l'utilisation du present perfect aux travers
                                          de text à trous..."
                />
                
                <ExerciceContainer className="exercice-container" imgExercice={home_ex} time="5min" titleEx={props.titleEx}
                state="Terminer" content="Dans cette exercice nous verrons 
                                          l'utilisation du present perfect aux travers
                                          de text à trous..."
                />
                <ExerciceContainer className="exercice-container" imgExercice={sign_where} time="10min" titleEx={props.titleEx}
                state="Terminer" content="Dans cette exercice nous verrons 
                                          l'utilisation du present perfect aux travers
                                          de text à trous..."
                />
                <ExerciceContainer className="exercice-container" imgExercice={props.imgExercice} time="15min"titleEx={props.titleEx}
                state="Terminer" content="Dans cette exercice nous verrons 
                                          l'utilisation du present perfect aux travers
                                          de text à trous..."
                />
                <a href ="#" class="button-train-skill">S'entrainer</a>
            </div>  
            
        </div>
    );
}

export default SectionCard;