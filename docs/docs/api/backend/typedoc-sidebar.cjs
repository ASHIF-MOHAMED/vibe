// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const typedocSidebar = { items: [{"type":"category","label":"auth","items":[{"type":"category","label":"Classes","items":[{"type":"category","label":"Auth/Controllers","items":[{"type":"doc","id":"api/backend/Auth/Controllers/auth.AuthController","label":"AuthController"}]},{"type":"category","label":"Auth/Errors","items":[{"type":"doc","id":"api/backend/Auth/Errors/auth.ChangePasswordError","label":"ChangePasswordError"}]},{"type":"category","label":"Auth/Services","items":[{"type":"doc","id":"api/backend/Auth/Services/auth.FirebaseAuthService","label":"FirebaseAuthService"}]},{"type":"category","label":"Auth/Validators","items":[{"type":"doc","id":"api/backend/Auth/Validators/auth.ChangePasswordBody","label":"ChangePasswordBody"},{"type":"doc","id":"api/backend/Auth/Validators/auth.SignUpBody","label":"SignUpBody"}]}]},{"type":"category","label":"Interfaces","items":[{"type":"category","label":"Auth/Interfaces","items":[{"type":"doc","id":"api/backend/Auth/Interfaces/auth.IAuthService","label":"IAuthService"}]}]},{"type":"category","label":"Variables","items":[{"type":"doc","id":"api/backend/Other/auth.authModuleOptions","label":"authModuleOptions"}]}],"link":{"type":"doc","id":"api/backend/Other/auth"}},{"type":"category","label":"courses","items":[{"type":"category","label":"Classes","items":[{"type":"category","label":"Courses/Controllers","items":[{"type":"doc","id":"api/backend/Courses/Controllers/courses.CourseController","label":"CourseController"},{"type":"category","label":"CourseVersionController","items":[{"type":"category","label":"Methods","items":[]}],"link":{"type":"doc","id":"api/backend/Courses/Controllers/courses.CourseVersionController"}},{"type":"category","label":"ItemController","items":[{"type":"category","label":"Methods","items":[]}],"link":{"type":"doc","id":"api/backend/Courses/Controllers/courses.ItemController"}},{"type":"category","label":"ModuleController","items":[{"type":"category","label":"Methods","items":[]}],"link":{"type":"doc","id":"api/backend/Courses/Controllers/courses.ModuleController"}},{"type":"category","label":"SectionController","items":[{"type":"category","label":"Methods","items":[]}],"link":{"type":"doc","id":"api/backend/Courses/Controllers/courses.SectionController"}}]},{"type":"category","label":"Courses/Transformers","items":[{"type":"doc","id":"api/backend/Courses/Transformers/courses.Course","label":"Course"},{"type":"doc","id":"api/backend/Courses/Transformers/courses.CourseVersion","label":"CourseVersion"},{"type":"doc","id":"api/backend/Courses/Transformers/courses.ItemsGroup","label":"ItemsGroup"},{"type":"doc","id":"api/backend/Courses/Transformers/courses.Module","label":"Module"},{"type":"doc","id":"api/backend/Courses/Transformers/courses.Section","label":"Section"}]},{"type":"category","label":"Courses/Transformers/Item","items":[{"type":"doc","id":"api/backend/Courses/Transformers/Item/courses.Item","label":"Item"}]},{"type":"category","label":"Courses/Validators/CourseValidators","items":[{"type":"doc","id":"api/backend/Courses/Validators/CourseValidators/courses.CreateCourseBody","label":"CreateCourseBody"},{"type":"doc","id":"api/backend/Courses/Validators/CourseValidators/courses.ReadCourseParams","label":"ReadCourseParams"},{"type":"doc","id":"api/backend/Courses/Validators/CourseValidators/courses.UpdateCourseBody","label":"UpdateCourseBody"},{"type":"doc","id":"api/backend/Courses/Validators/CourseValidators/courses.UpdateCourseParams","label":"UpdateCourseParams"}]},{"type":"category","label":"Courses/Validators/CourseVersionValidators","items":[{"type":"doc","id":"api/backend/Courses/Validators/CourseVersionValidators/courses.CreateCourseVersionBody","label":"CreateCourseVersionBody"},{"type":"doc","id":"api/backend/Courses/Validators/CourseVersionValidators/courses.CreateCourseVersionParams","label":"CreateCourseVersionParams"},{"type":"doc","id":"api/backend/Courses/Validators/CourseVersionValidators/courses.ReadCourseVersionParams","label":"ReadCourseVersionParams"}]},{"type":"category","label":"Courses/Validators/ItemValidators","items":[{"type":"doc","id":"api/backend/Courses/Validators/ItemValidators/courses.BlogDetailsPayloadValidator","label":"BlogDetailsPayloadValidator"},{"type":"doc","id":"api/backend/Courses/Validators/ItemValidators/courses.CreateItemBody","label":"CreateItemBody"},{"type":"doc","id":"api/backend/Courses/Validators/ItemValidators/courses.CreateItemParams","label":"CreateItemParams"},{"type":"doc","id":"api/backend/Courses/Validators/ItemValidators/courses.DeleteItemParams","label":"DeleteItemParams"},{"type":"doc","id":"api/backend/Courses/Validators/ItemValidators/courses.MoveItemBody","label":"MoveItemBody"},{"type":"doc","id":"api/backend/Courses/Validators/ItemValidators/courses.MoveItemParams","label":"MoveItemParams"},{"type":"doc","id":"api/backend/Courses/Validators/ItemValidators/courses.QuizDetailsPayloadValidator","label":"QuizDetailsPayloadValidator"},{"type":"doc","id":"api/backend/Courses/Validators/ItemValidators/courses.ReadAllItemsParams","label":"ReadAllItemsParams"},{"type":"doc","id":"api/backend/Courses/Validators/ItemValidators/courses.UpdateItemBody","label":"UpdateItemBody"},{"type":"doc","id":"api/backend/Courses/Validators/ItemValidators/courses.UpdateItemParams","label":"UpdateItemParams"},{"type":"doc","id":"api/backend/Courses/Validators/ItemValidators/courses.VideoDetailsPayloadValidator","label":"VideoDetailsPayloadValidator"}]},{"type":"category","label":"Courses/Validators/ModuleValidators","items":[{"type":"doc","id":"api/backend/Courses/Validators/ModuleValidators/courses.CreateModuleBody","label":"CreateModuleBody"},{"type":"doc","id":"api/backend/Courses/Validators/ModuleValidators/courses.CreateModuleParams","label":"CreateModuleParams"},{"type":"doc","id":"api/backend/Courses/Validators/ModuleValidators/courses.MoveModuleBody","label":"MoveModuleBody"},{"type":"doc","id":"api/backend/Courses/Validators/ModuleValidators/courses.MoveModuleParams","label":"MoveModuleParams"},{"type":"doc","id":"api/backend/Courses/Validators/ModuleValidators/courses.UpdateModuleBody","label":"UpdateModuleBody"},{"type":"doc","id":"api/backend/Courses/Validators/ModuleValidators/courses.UpdateModuleParams","label":"UpdateModuleParams"}]},{"type":"category","label":"Courses/Validators/SectionValidators","items":[{"type":"doc","id":"api/backend/Courses/Validators/SectionValidators/courses.CreateSectionBody","label":"CreateSectionBody"},{"type":"doc","id":"api/backend/Courses/Validators/SectionValidators/courses.CreateSectionParams","label":"CreateSectionParams"},{"type":"doc","id":"api/backend/Courses/Validators/SectionValidators/courses.MoveSectionBody","label":"MoveSectionBody"},{"type":"doc","id":"api/backend/Courses/Validators/SectionValidators/courses.MoveSectionParams","label":"MoveSectionParams"},{"type":"doc","id":"api/backend/Courses/Validators/SectionValidators/courses.UpdateSectionBody","label":"UpdateSectionBody"},{"type":"doc","id":"api/backend/Courses/Validators/SectionValidators/courses.UpdateSectionParams","label":"UpdateSectionParams"}]}]},{"type":"category","label":"Variables","items":[{"type":"doc","id":"api/backend/Other/courses.coursesModuleOptions","label":"coursesModuleOptions"}]}],"link":{"type":"doc","id":"api/backend/Other/courses"}}]};
module.exports = typedocSidebar.items;