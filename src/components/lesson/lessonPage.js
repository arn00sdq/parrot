import React from 'react';
import DisplayLesson from "../common/displayActivity/lesson/displayLesson";
import DisplaySummary from "../common/displayActivity/summary/displaySummary";
import { data as lessonsData } from "../../database/lessons";

function LessonPage({ state, handles }) {
    var id = state.lessonPage.lessonId;
    var currentStep = state.lessonPage.step;
    var currentLesson = lessonsData.find((lesson) => {
        return lesson.id == id;
    });
    return (
        <div id="root-css">
            <main>
                <DisplaySummary
                    name={`${id}`}
                    summary={currentLesson.summary}
                />
                <DisplayLesson
                    lesson={currentLesson}
                    step={currentStep}
                    handles={handles}
                />
            </main>
        </div>
    )
}

export default LessonPage;
