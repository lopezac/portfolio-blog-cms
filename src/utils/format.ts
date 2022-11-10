interface tObject {
  [key: string]: any;
  timestamp: string | Date;
}

export const formatIntoDate = (object: tObject) => {
  if (object.timestamp) {
    object.timestamp = new Date(object.timestamp);
  }
  return object;
};
