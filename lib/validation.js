export const validation = (formData) => {
    if(!formData.fullname) return 'Fullname is required'
    if (!formData.age) return 'age is required';
    if (!formData.country) return 'country is required';
    if (!formData.school) return 'school is required';
    if (!formData.grade) return 'grade is required';
    if (!formData.timezone) return 'timezone is required';
    if (!formData.email) return 'email is required';
    if (!formData.message) return 'message is required';
    if (!formData.whatsapp) return 'whatsapp is required';
}