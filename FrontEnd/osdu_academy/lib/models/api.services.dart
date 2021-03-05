import 'dart:convert' as convert;
import 'package:http/http.dart' as http;

class ApiServices {
  static String courseUrl = "https://localhost:44303/api/course";
  static Future fetchCourse() async {
    return await http.get(courseUrl);
  }
}
