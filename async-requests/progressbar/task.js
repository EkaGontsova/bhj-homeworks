document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const fileInput = document.getElementById("file");
  const file = fileInput.files[0];

  if (!file) {
    alert("Пожалуйста, выберите файл для загрузки.");
    return;
  }

  const xhr = new XMLHttpRequest();
  const progress = document.getElementById("progress");

  xhr.open(
    "POST",
    "https://students.netoservices.ru/nestjs-backend/upload",
    true
  );

  xhr.upload.addEventListener("progress", function (event) {
    if (event.lengthComputable) {
      const percentComplete = (event.loaded / event.total) * 100;
      progress.value = percentComplete;
      console.log(`Загрузка: ${percentComplete.toFixed(2)}%`);
    }
  });

  xhr.onload = function () {
    console.log(`Статус ответа: ${xhr.status}`);
    if (xhr.status === 200 || xhr.status === 201) {
      alert("Файл успешно загружен!");
      progress.value = 100;
    } else {
      try {
        const response = JSON.parse(xhr.responseText);
        alert(
          "Ошибка при загрузке файла: " + response.message || xhr.statusText
        );
      } catch (e) {
        alert("Ошибка при загрузке файла: " + xhr.statusText);
      }
    }
  };

  xhr.onerror = function () {
    alert("Ошибка сети. Попробуйте еще раз.");
  };

  const formData = new FormData();
  formData.append("file", file);

  xhr.send(formData);
  console.log(`Отправка файла: ${file.name}`);
});
