import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Maria',
      lastname: 'Rebelo',
      email: 'maria.ajsr@gmail.com',
      age: 6,
      weight: 18,
      height: 1.05,
    });
    res.json(newStudent);
  }
}

export default new HomeController();
