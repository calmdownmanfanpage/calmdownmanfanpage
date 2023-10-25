const unreadNotificationsFunc = (notifications) => {
  return notifications.filter((noti) => noti.isRead === false);
};

export default unreadNotificationsFunc;
