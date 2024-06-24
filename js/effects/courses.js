const options = document.querySelectorAll(".course_option");
const courseInfo = document.querySelectorAll(".course_info");

options.forEach((option) => {

  option.addEventListener('click', () => {

    /* Change Option Selected */
    options.forEach((option) => {
      option.classList.remove('active')
    })
    option.classList.add('active')

    courseInfo.forEach((info) => {

      /* Change Course Info */
      info.classList.remove('active')
      if (option.id.includes(info.id))
        info.classList.add('active')
    })
  })
})