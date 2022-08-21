// 07_[Graph] adjacency matrix(인접행렬) 구현.js
// 2022.08.21(Sun)

// Directed graph(방향 그래프)
// unweighted(비가중치)
// adjacency matrix(인접 행렬)
// 기존 배열의 인덱스를 정점으로 사용(ex. 0, 1, 2, ... --> 정점)

class GraphWithAdjacencyMatrix {
  // constructor 구현
  constructor() {
    this.matrix = [];
  }

  // [vertex(정점) 추가]
  addVertex() {
    const currentLength = this.matrix.length;
    for (let i = 0; i < currentLength; i++) {
      this.matrix[i].push(0);
    }
    this.matrix.push(new Array(currentLength + 1).fill(0));
  }

  // [vertex(정점) 탐색]
  contains(vertex) {
    // this.matrix에 vertex 존재 -> true, 아니면 -> false 리턴
    return !!this.matrix[vertex];
  }

  // [1. vertex(정점)과 edge(간선) 추가]
  addEdge(from, to) {
    const currentLength = this.matrix.length - 1;

    if (from === undefined || to === undefined) {
      console.log("2개의 인자가 있어야 합니다.");
      return;
    }

    // 간선을 추가할 수 없는 상황에선 추가 X
    // from vertex와 to vertex가 전체 그래프의 범위를 벗어난다면 return
    if (from > currentLength || to > currentLength || from < 0 || to < 0) {
      console.log("범위가 매트릭스 밖에 있습니다.");
      return;
    }

    // this.matrix[from][to]의 값을 1로 바꿔줌 -> edge으로 연결이 되어 있음 표시
    this.matrix[from][to] = 1;
  }

  // 2. from vertex와 to vertex 사이에 edge를 가지고 있는지 판단
  hasEdge(from, to) {
    return !!this.matrix[from][to];
  }

  // [3. edge(간선) 제거]
  // from vertex와 to vertex 사이에 관련이 없다면, edge 제거
  removeEdge(from, to) {
    const currentLength = this.matrix.length - 1;

    if (from === undefined || to === undefined) {
      console.log("2개의 인자가 있어야 합니다.");
      return;
    }

    // from vertex와 to vertex가 전체 그래프의 범위를 벗어난다면 return
    if (from > currentLength || to > currentLength || from < 0 || to < 0) {
      console.log("범위가 매트릭스 밖에 있습니다.");
      return;
    }

    // 간선 삭제
    // this.matrix[from][to]의 값을 0으로 바꿔줌 -> 관련 없음을 표시
    this.matrix[from][to] = 0;
  }
}
