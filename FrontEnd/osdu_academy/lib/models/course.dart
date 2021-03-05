class Course {
  int _id;
  String title;
  String description;
  num rating;

  Course(this.title, this.description, this.rating);
  Course.WithId(this._id, this.title, this.description, this.rating);

  Map<String, dynamic> toMap() {
    var map = Map<String, dynamic>();
    map["title"] = title;
    map["description"] = description;
    map["rating"] = rating;
    if (_id != null) map["id"] = _id;
    return map;
  }

  Course.fromObject(dynamic object) {
    this._id = object["id"];
    this.title = object["title"];
    this.description = object["description"];
    this.rating = object["rating"];
  }
}
