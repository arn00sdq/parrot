import { actionTypes as types } from './database/actiontypes'

const reducer = (state, action) => {
    
    const { type, payload } = action
    
    switch (type) {
        case types.USER.MSE_HOVER_LANG:
            return {
                ...state,
                user: {
                    ...state.user,
                    changeLanguageBtnToggle: !state.user.changeLanguageBtnToggle,
                }
            }
        case types.EXERCISE_PAGE.NEXT_STEP:
            return {
                ...state,
                exercisePage: {
                    ...state.exercisePage,

                    step: parseInt(state.exercisePage.step + 1)
                }
            };
        case types.USER.CHANGE_LANG:
            return {
                ...state,
                home: {
                    ...state.home,
                    user: {
                        ...state.home.user,
                        selectedLanguage: payload.newLanguage,
                    }
                }
            };
        case types.HOME.DSHB_CHANGE_SECTION:
            return {
                ...state,
                home: {
                    ...state.home,
                    dashboard: {
                        ...state.home.dashboard,
                        section: payload.selectedSection,
                    }
                }
            };
        case types.EXERCISE_PICKER.PAGE_CHANGE:
            console.log(payload.exerciseId)
            return {
                ...state,
                exercisePage: {
                    ...state.exercisePage,
                    exerciseId: payload.exerciseId,
                    
                }
                
            };
        case types.EXERCISE_PICKER.CONJUG_CLK:
            var conjugationsIndex = state.exercisePicker.conjugations.findIndex(
                (c) => {
                    return c.id === payload.conjugationId
                }
            )
            return {
                ...state,
                exercisePicker: {
                    ...state.exercisePicker,
                    conjugations: {
                        ...state.exercisePicker.conjugations,
                        [conjugationsIndex]: {
                            ...state.exercisePicker.conjugations[conjugationsIndex],
                            checked: state.exercisePicker.conjugations[conjugationsIndex].checked ? false : true,
                        },
                    }

                }
            }
        default:
            return state;
    }
    
};

export { reducer }