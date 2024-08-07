function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = [];
  let bridgeWeight = 0;

  while (truck_weights.length > 0 || bridge.length > 0) {
    // 시간 경과
    time++;

    // 다리 위의 트럭을 하나씩 전진시키고, 다리에서 나갈 트럭을 제거
    if (bridge.length > 0 && bridge[0].endTime === time) {
      bridgeWeight -= bridge[0].weight;
      bridge.shift();
    }

    // 새 트럭이 다리에 진입할 수 있는지 확인
    if (truck_weights.length > 0 && bridgeWeight + truck_weights[0] <= weight) {
      const currentTruckWeight = truck_weights.shift();
      bridge.push({
        weight: currentTruckWeight,
        endTime: time + bridge_length,
      });
      bridgeWeight += currentTruckWeight;
    }
  }

  return time;
}
