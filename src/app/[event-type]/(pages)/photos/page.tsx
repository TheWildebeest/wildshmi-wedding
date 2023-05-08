import { Text } from "@/shared/components/Text";
import Link from "next/link";
import React, { FC } from "react";

const PhotosPage: FC = () => (
  <>
    <ul>
      <li style={{ marginBottom: "1em" }}>
        <Text size="M">
          <Link href="https://www.facebook.com/LHaridas/posts/pfbid0jyDKT6DMVHoUZspEBm5rX55Lm2ugMBKiuH9V258gvtu4ukyR1UWEGRbDrJgK4oGxl">
            Proposal and engagement party
          </Link>{" "}
          — London, 14.04.2023
        </Text>
      </li>
      <li style={{ marginBottom: "1em" }}>
        <Text size="M">
          <Link href="https://www.facebook.com/LHaridas/posts/pfbid0ZbnxLztUxHtQwr1Z7J9FDDEWjXjVAtZCHUmzgLYh1nsvSweeSeUdzwwSqYQJvhBnl">
            India engagement ceremony
          </Link>{" "}
          — Thiruvananthapuram, 11.03.2023
        </Text>
      </li>
    </ul>
  </>
);

export default PhotosPage;
