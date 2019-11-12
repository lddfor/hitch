function generateData() {
  const data = [];

  const dateList = [329, 135, 86, 73, 85, 73, 68, 92, 130, 245, 139, 115, 111, 59, 206, 137, 128, 85, 94, 71, 106, 84, 93, 85, 73, 83, 125, 107, 82, 44, 72, 106, 107, 66, 91, 92, 113, 107, 131, 111, 64, 69, 88, 77, 83, 111, 57, 55, 60]
  
  for (let n = 0; n < 10; n += 1) {
    data[n] = []
    for (let i = 0; i <= dateList.length; i += 1) {
      data[n].push([i, n * 20, dateList[i]]);
    }
  }  
  return data;
}

const data = generateData();
// console.log(dateList);

const graphOption = () => {
  return {
    visualMap: {
      show: false,
      min: 2,
      max: 6,
    },
    xAxis3D: {
      type: 'value',
    },
    yAxis3D: {
      type: 'value',
    },
    zAxis3D: {
      type: 'value',
    },
    grid3D: {
      environment: '#FFF',
      axisLine: {
        lineStyle: { color: '#000' },
      },
      axisPointer: {
        lineStyle: { color: '#000' },
      },
      viewControl: {
        // autoRotate: true
        alpha: 10,
        beta: 0,
        rotateSensitivity: 0,
        zoomSensitivity: 0,
      },
      light: {
        main: {
          shadow: true,
          quality: 'ultra',
          intensity: 1.5,
        },
      },
    },
    series: [{
      type: 'line3D',
      data: null,
      shading: 'color',
      label: {
        formatter: (param) => {
          return param.value[2].toFixed(1);
        },
      },
    }],
  }
}

export { data, graphOption }
