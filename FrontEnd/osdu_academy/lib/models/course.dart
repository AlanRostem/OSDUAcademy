import 'dart:ffi';

class Course {
  int _id;
  String _title;
  String _description;
  num _rating;

  Course(this._title, this._description, this._rating);
  Course.WithId(this._id, this._title, this._description, this._rating);

  int get id => _id;
  String get title => _title;
  String get description => _description;
  num get rating => _rating;

  set title(String newTitle) => _title = newTitle;

  set decription(String newDesc) => _description = newDesc;

  set rating(num newRating) => _rating = newRating;

  Map<String, dynamic> toMap() {
    var map = Map<String, dynamic>();
    map["title"] = _title;
    map["description"] = _description;
    map["rating"] = _rating;
    if (_id != null) map["id"] = _id;
    return map;
  }

  Course.fromObject(dynamic object) {
    this._id = object["id"];
    this._title = object["title"];
    this._description = object["description"];
    this._rating = object["rating"];
  }
}
