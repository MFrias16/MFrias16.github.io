// Conversión de tiempo
function convertTime() {
  const value = parseFloat(document.getElementById("time-value").value);
  const from = document.getElementById("time-from").value;
  const to = document.getElementById("time-to").value;
  let result;

  if (isNaN(value)) {
    alert("Por favor ingresa un valor numérico válido");
    return;
  }

  if (from === "hours" && to === "minutes") result = value * 60;
  else if (from === "hours" && to === "seconds") result = value * 3600;
  else if (from === "minutes" && to === "hours") result = value / 60;
  else if (from === "minutes" && to === "seconds") result = value * 60;
  else if (from === "seconds" && to === "hours") result = value / 3600;
  else if (from === "seconds" && to === "minutes") result = value / 60;
  else result = value;

  document.getElementById("time-result").innerText = `Resultado: ${result}`;
}

// Conversión de datos
function convertData() {
  const value = parseFloat(document.getElementById("data-value").value);
  const from = document.getElementById("data-from").value;
  const to = document.getElementById("data-to").value;
  let result;

  if (isNaN(value)) {
    alert("Por favor ingresa un valor numérico válido");
    return;
  }

  const factors = {
    bits: 1,
    bytes: 8,
    Kbps: 1_000,
    Mbps: 1_000_000,
    Gbps: 1_000_000_000,
    KB: 8 * 1024,
    MB: 8 * 1024 ** 2,
    GB: 8 * 1024 ** 3,
  };

  result = (value * factors[from]) / factors[to];
  document.getElementById("data-result").innerText = `Resultado: ${result}`;
}

  