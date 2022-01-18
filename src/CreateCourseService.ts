/**
 * name - string
 * duration - number
 * educator - string
 * 
 */

interface Course {
    name: string;
    duration ?: number;
    educator: string;
}

class CreateCourseService {
    execute({name, duration = 8, educator}: Course) {
        // execute({nome, duration, educator}: Course)
        //console.log(data.nome, data.duration, data.educator);
        console.log(name, duration, educator);
    }
}

export default new CreateCourseService();