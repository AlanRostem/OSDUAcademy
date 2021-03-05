import 'package:flutter/material.dart';
import 'package:osdu_academy/models/course.dart';

class AddCourse extends StatefulWidget {
  final Course course;
  AddCourse(this.course);

  @override
  State<StatefulWidget> createState() => _AddCourseState(course);
}

class _AddCourseState extends State<AddCourse> {
  Course course;
  var titleController = TextEditingController();
  var descriptionController = TextEditingController();
  var ratingController =
      TextEditingController(); // TODO: Make it a number input
  var textStyle = TextStyle();

  _AddCourseState(this.course);

  @override
  Widget build(BuildContext context) {
    titleController.text = course.title;
    descriptionController.text = course.title;
    ratingController.text = course.title;
    textStyle = Theme.of(context).textTheme.headline6;
    return Scaffold(
      appBar: _buildAppBar(),
      body: _buildForm(),
    );
  }

  Widget _buildAppBar() {
    return AppBar(
      title: Text("Course"),
    );
  }

  Widget _buildForm() {
    return TextField(
      controller: titleController,
      style: textStyle,
      onChanged: null,
      decoration: InputDecoration(
          labelText: "Title:",
          labelStyle: textStyle,
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(5.0))),
    );
  }
}
