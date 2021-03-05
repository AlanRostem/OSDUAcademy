import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:osdu_academy/models/api.services.dart';
import 'package:osdu_academy/models/course.dart';

class Courses extends StatefulWidget {
  Courses({key}) : super(key: key);

  @override
  _CourseState createState() => _CourseState();
}

class _CourseState extends State<StatefulWidget> {
  List<Course> courses;

  getCourse() {
    ApiServices.fetchCourse().then((response) {
      Iterable list = json.decode(response.body);
      List<Course> courseList = [];
      courseList = list.map((model) => Course.fromObject(model)).toList();
      setState(() {
        courses = courseList;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Courses:")),
      body: null,
    );
  }
}
