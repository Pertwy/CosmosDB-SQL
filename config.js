// @ts-check

const config = {
  endpoint: "https://47f07516-0ee0-4-231-b9ee.documents.azure.com:443/",
  key: "dM34F548bBv35JK1gvmyLQoA32mnIFiOzdRSQ8uCMwXkwSwWmaJnY2hwmOVeXYQKO7RXVkdQxD1DliNNOLC7zw==",
  databaseId: "Tasks",
  containerId: "Items",
  partitionKey: { kind: "Hash", paths: ["/category"] }
};

module.exports = config;
